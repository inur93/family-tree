namespace FamilyTree.Domain.Repositories;

public interface INameRepository
{
    Task<Name> Create(Name name, CancellationToken token = default);

    Task<Name> Update(Name name, CancellationToken token = default);

    Task Delete(Name name, CancellationToken token = default);
}
