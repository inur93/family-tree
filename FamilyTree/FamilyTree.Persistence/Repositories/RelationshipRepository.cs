using FamilyTree.Domain;
using FamilyTree.Domain.Exceptions;
using FamilyTree.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FamilyTree.Persistence.Repositories;

internal class RelationshipRepository : RepositoryBase<Relationship>, IRelationshipRepository
{
    public RelationshipRepository(FamilyTreeDatabaseContext context) : base(context)
    {
    }

    public async Task<Relationship> FindById(string id, CancellationToken token = default)
    {
        var relationship = await _set.FindAsync(new object[] { id }, token)
            ?? throw new EntityNotFoundException(typeof(Relationship), id);
        var entry = _context.Entry(relationship);
        await entry.Reference(x => x.Person).LoadAsync(token);
        await entry.Reference(x => x.Person).LoadAsync(token);
        return relationship;
    }

    public async Task<IEnumerable<Relationship>> GetRelationships(string personId, CancellationToken token = default)
    {
        var relationships = await _set.Where(x => x.PersonId == personId || x.RelatedId == personId)
            .Include(x => x.Person)
            .ThenInclude(x => x.Names)
            .Include(x => x.Related)
            .ThenInclude(x => x.Names)
            .ToListAsync(token);

        return relationships;
    }
}
