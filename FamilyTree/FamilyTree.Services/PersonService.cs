using FamilyTree.Contracts.Person;
using FamilyTree.Domain;
using FamilyTree.Domain.Repositories;
using FamilyTree.Services.Abstractions;
using FamilyTree.Services.Extensions;
using Mapster;

namespace FamilyTree.Services;

public class PersonService : IPersonService
{
    private readonly IPersonRepository _personRepository;
    private readonly INameRepository _nameRepository;
    private readonly IRelationshipRepository _relationshipRepository;
    private readonly IUnitOfWork _unitOfWork;

    public PersonService(
        IPersonRepository personRepository,
        INameRepository nameRepository,
        IRelationshipRepository relationshipRepository,
        IUnitOfWork unitOfWork)
    {
        _personRepository = personRepository;
        _unitOfWork = unitOfWork;
        _nameRepository = nameRepository;
        _relationshipRepository = relationshipRepository;
    }


    public async Task<PersonDto> CreatePerson(CreatePersonDto person, CancellationToken token = default)
    {
        var record = person.Adapt<Person>();
        record.Birthday = record.Birthday.Date; // strip time to force date only
        var name = person.Adapt<Name>();
        name.From = person.Birthday;
        record.Names.Add(name);
        var created = await _personRepository.Create(record, token);
        await _nameRepository.Create(name, token);
        await _unitOfWork.SaveChangesAsync(token);

        return (await _personRepository.FindById(created.Id, token)).Map();
    }

    public async Task DeletePerson(string id, CancellationToken token = default)
    {
        await _personRepository.Delete(id, token);
        await _unitOfWork.SaveChangesAsync(token);
    }

    public async Task<IEnumerable<BasicPersonDto>> GetByQuery(string? query, DateTime? birthdayFrom, DateTime? birthdayTo, CancellationToken token = default)
    {
        var records = await _personRepository.FindByQuery(query, birthdayFrom, birthdayTo, token);
        return records.MapBasic();
    }

    public async Task<PersonDto> GetPerson(string id, CancellationToken token = default)
    {
        var record = await _personRepository.FindById(id, token);
        await _relationshipRepository.GetRelationships(id, token);
        return record.Map();
    }

    public async Task<IEnumerable<BasicPersonDto>> GetRelatedPeople(string id, CancellationToken token = default)
    {
        var records = await _relationshipRepository.GetRelationships(id, token);
        var people = records.Select(x => x.Of)
            .Concat(records.Select(x => x.Person))
            .DistinctBy(x => x.Id);
        return people.MapBasic();
    }

    public async Task<PersonDto> UpdatePerson(string id, CreatePersonDto person, CancellationToken token = default)
    {
        var existing = await _personRepository.FindById(id, token);
        var name = person.Adapt(existing.CurrentName);
        var updated = person.Adapt(existing);
        await _personRepository.Update(updated, token);
        await _nameRepository.Update(name, token);
        await _unitOfWork.SaveChangesAsync();
        return updated.Adapt<PersonDto>();
    }
}