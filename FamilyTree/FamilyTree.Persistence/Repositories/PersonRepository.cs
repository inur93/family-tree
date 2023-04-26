using FamilyTree.Domain;
using FamilyTree.Domain.Exceptions;
using FamilyTree.Domain.Repositories;
using Microsoft.EntityFrameworkCore;

namespace FamilyTree.Persistence.Repositories;

internal class PersonRepository : RepositoryBase<Person>, IPersonRepository
{
    public PersonRepository(FamilyTreeDatabaseContext context) : base(context)
    {
    }

    public async Task Delete(string id, CancellationToken token = default)
    {
        await Delete(await FindById(id, token), token);
    }

    public async Task<Person> FindById(string id, CancellationToken token = default)
    {
        var person = await _set.FindAsync(new object[] { id }, token) ??
            throw new EntityNotFoundException(typeof(Person), id);

        var entry = _context.Entry(person);
        await entry.Collection(x => x.RelationshipPerson).LoadAsync(token);
        await entry.Collection(x => x.RelationshipRelated).LoadAsync(token);
        await entry.Collection(x => x.Names).LoadAsync(token);
        return person;
    }

    public async Task<IEnumerable<Person>> FindByQuery(string? query, DateTime? birthdayFrom, DateTime? birthdayTo, CancellationToken token = default)
    {
        var q = _set.AsQueryable()
            .Include(x => x.RelationshipPerson)
            .Include(x => x.RelationshipRelated)
            .Include(x => x.Names)
            .AsQueryable();
        if (!string.IsNullOrWhiteSpace(query))
        {
            q = q.Where(x => x.CurrentName.Firstname.ToLower().Contains(query) ||
            x.CurrentName.Lastname.ToLower().Contains(query) ||
            (x.CurrentName.Middlename != null && x.CurrentName.Middlename.ToLower().Contains(query)));
        }

        if (birthdayFrom != null)
        {
            q = q.Where(x => x.Birthday >= birthdayFrom);
        }

        if (birthdayTo != null)
        {
            q = q.Where(x => x.Birthday <= birthdayTo);
        }

        return await q.ToListAsync(token);
    }
}
