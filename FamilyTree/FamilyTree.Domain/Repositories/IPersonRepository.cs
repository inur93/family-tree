namespace FamilyTree.Domain.Repositories;

public interface IPersonRepository
{
    Task<Person> Create(Person person, CancellationToken token = default);

    Task<Person> Update(Person person, CancellationToken token = default);

    Task<IEnumerable<Person>> FindByQuery(string? query, DateTime? birthdayFrom, DateTime? birthdayTo, CancellationToken token = default);

    Task<Person> FindById(string id, CancellationToken token = default);

    Task Delete(Person person, CancellationToken token = default);

    Task Delete(string id, CancellationToken token = default);
    
}
