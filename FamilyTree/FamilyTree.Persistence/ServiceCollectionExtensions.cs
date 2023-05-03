using FamilyTree.Domain;
using FamilyTree.Domain.Repositories;
using FamilyTree.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace FamilyTree.Persistence;

public static class ServiceCollectionExtensions
{
    public static void AddRepositories(this IServiceCollection services, string connectionString)
    {
        services.AddDbContext<FamilyTreeDatabaseContext>(config =>
        {
            config.UseNpgsql(connectionString);
        });

        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IPersonRepository, PersonRepository>();
        services.AddScoped<IRelationshipRepository, RelationshipRepository>();
        services.AddScoped<INameRepository, NameRepository>();
    }

    public static async Task AddDatabaseMigrations(this IServiceProvider serviceProvider)
    {
        var context = serviceProvider.GetRequiredService<FamilyTreeDatabaseContext>();
        await context.Database.MigrateAsync();
    }

    public static async Task AddDatabaseTestData(this IServiceProvider serviceProvider)
    {
        var context = serviceProvider.GetRequiredService<FamilyTreeDatabaseContext>();
        if (context.Persons.Any())
        {
            return;
        }
        var person1 = new Person("Rúni", "Egholm", "Vørmadal", new DateTime(1993, 01, 28).ToUniversalTime(), Sex.Male);
        var person2 = new Person("Frederikke", "Emilie", "Sembach", new DateTime(1993, 02, 28).ToUniversalTime(), Sex.Female);
        var person3 = new Person("Eivind", "Egholm", "Vørmadal", new DateTime(1998, 08, 03).ToUniversalTime(), Sex.Male);
        var person4 = new Person("Elisabett", "Egholm", "Marjunardóttir", new DateTime(1962, 10, 06).ToUniversalTime(), Sex.Female);
        var person5 = new Person("Heðin", "Egholm", "Skov", new DateTime(1983, 01, 24).ToUniversalTime(), Sex.Male);
        var person6 = new Person("Jóhanna", "Heðinsdóttir", new DateTime(2019, 02, 20).ToUniversalTime(), Sex.Female);

        var relationship1 = new Relationship(person1, RelationshipType.Partner, person2, new DateTime(2022, 08, 06).ToUniversalTime());
        var relationship2 = new Relationship(person1, RelationshipType.Child, person4);
        var relationship3 = new Relationship(person3, RelationshipType.Child, person4);
        var relationship4 = new Relationship(person5, RelationshipType.Child, person4);
        var relationship5 = new Relationship(person6, RelationshipType.Child, person5);

        await context.Persons.AddRangeAsync(new[]
        {
            person1, person2, person3, person4, person5, person6
        });

        await context.Relationships.AddRangeAsync(new[]
        {
            relationship1, relationship2, relationship3, relationship4, relationship5,
        });

        await context.SaveChangesAsync();
    }


}
