using FamilyTree.Contracts.Person;

namespace FamilyTree.Services.Abstractions;

public interface IPersonService
{
    Task<PersonDto> GetPerson(string id, CancellationToken token = default);

    Task<IEnumerable<BasicPersonDto>> GetByQuery(string? query, DateTime? birthdayFrom, DateTime? birthdayTo, CancellationToken token = default);

    Task<IEnumerable<BasicPersonDto>> GetRelatedPeople(string id, CancellationToken token = default);
    Task<PersonDto> CreatePerson(CreatePersonDto person, CancellationToken token = default);

    Task<PersonDto> UpdatePerson(string id, CreatePersonDto person, CancellationToken token = default);

    Task DeletePerson(string id, CancellationToken token = default);
}