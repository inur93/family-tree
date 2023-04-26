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
}
