﻿using FamilyTree.Services.Abstractions;
using Microsoft.Extensions.DependencyInjection;

namespace FamilyTree.Services;

public static class ServiceCollectionExtensions
{
    public static void AddServices(this IServiceCollection services)
    {
        services.AddScoped<IPersonService, PersonService>();
        services.AddScoped<IRelationshipService, RelationshipService>();
    }
}
