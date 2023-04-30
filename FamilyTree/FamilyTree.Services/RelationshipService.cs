using FamilyTree.Contracts.Relationship;
using FamilyTree.Domain;
using FamilyTree.Domain.Repositories;
using FamilyTree.Services.Abstractions;
using FamilyTree.Services.Extensions;
using Mapster;

namespace FamilyTree.Services;

internal class RelationshipService : IRelationshipService
{
    private readonly IRelationshipRepository _relationshipRepository;
    private readonly IUnitOfWork _unitOfWork;

    public RelationshipService(IRelationshipRepository relationshipRepository, IUnitOfWork unitOfWork)
    {
        _relationshipRepository = relationshipRepository;
        _unitOfWork = unitOfWork;
    }

    public async Task<RelationshipDto> CreateRelationship(CreateRelationshipDto relationship, CancellationToken token = default)
    {
        var record = relationship.Map();
        var created = await _relationshipRepository.Create(record, token);
        await _unitOfWork.SaveChangesAsync(token);
        return (await _relationshipRepository.FindById(created.Id, token)).Adapt<RelationshipDto>();
    }

    public async Task DeleteRelationship(string id, CancellationToken token = default)
    {
        var record = await _relationshipRepository.FindById(id, token);
        await _relationshipRepository.Delete(record);
        await _unitOfWork.SaveChangesAsync(token);
    }

    public async Task<RelationshipDto> UpdateRelationship(string id, UpdateRelationshipDto relationship, CancellationToken token = default)
    {
        //var existing = await _relationshipRepository.FindById(id, token);
        // relationship.Adapt(existing);
        //_relationshipRepository.Update
        throw new NotImplementedException();
    }
}
