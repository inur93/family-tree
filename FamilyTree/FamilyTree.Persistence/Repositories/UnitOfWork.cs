using FamilyTree.Domain.Repositories;

namespace FamilyTree.Persistence.Repositories;

internal class UnitOfWork : IUnitOfWork
{
    private readonly FamilyTreeDatabaseContext _context;

    public UnitOfWork(FamilyTreeDatabaseContext context)
    {
        _context = context;
    }
    public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return await _context.SaveChangesAsync(cancellationToken);
    }
}
