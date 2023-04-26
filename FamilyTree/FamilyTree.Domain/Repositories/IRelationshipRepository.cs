namespace FamilyTree.Domain.Repositories;

public interface IRelationshipRepository
{
    Task<Relationship> Create(Relationship relationship, CancellationToken token = default);

    Task<Relationship> FindById(string id, CancellationToken token = default);

    Task<IEnumerable<Relationship>> GetRelationships(string personId, CancellationToken token = default);

    Task Delete(Relationship relationship, CancellationToken token = default);
}
