using Duende.IdentityServer.EntityFramework.Options;
using FamilyTree.Domain;
using FamilyTree.Persistence.Configurations;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace FamilyTree.Persistence;

public class FamilyTreeDatabaseContext : ApiAuthorizationDbContext<ApplicationUser>
{
    public DbSet<Person> Persons { get; set; }

    public DbSet<Relationship> Relationships { get; set; }

    public DbSet<Name> Names { get; set; }

    public FamilyTreeDatabaseContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(PersonConfiguration).Assembly);
    }
}
