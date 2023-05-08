using FamilyTree.Contracts.Relationship;

namespace FamilyTree.Services.Abstractions;

public interface IRelationshipService
{
    Task<RelationshipDto> CreateRelationship(CreateRelationshipDto relationship, CancellationToken token);

    Task<RelationshipDto> UpdateRelationship(string id, UpdateRelationshipDto relationship, CancellationToken token);

    Task DeleteRelationship(string id, CancellationToken token);
    Task<RelationshipDto> GetRelationship(string id, CancellationToken token);
}
