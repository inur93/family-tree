using FamilyTree.Domain;
using FamilyTree.Domain.Repositories;

namespace FamilyTree.Persistence.Repositories;

internal class NameRepository : RepositoryBase<Name>, INameRepository
{
    public NameRepository(FamilyTreeDatabaseContext context) : base(context)
    {
    }
}
