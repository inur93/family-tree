using FamilyTree.Api.Configurations;
using System.Text.Json.Serialization;
using FamilyTree.Persistence;
using FamilyTree.Presentation.OpenApi;
using FamilyTree.Services;
using Duende.IdentityServer.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.Converters.Add(new DateTimeConverter());
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    })
    .AddApplicationPart(typeof(FamilyTree.Presentation.OpenApi.AssemblyReference).Assembly);

builder.Services.AddExceptionMappings();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(config =>
{
    config.CustomOperationIds(e => e.ActionDescriptor.RouteValues["action"]);
    config.UseOneOfForPolymorphism();

    config.SelectDiscriminatorNameUsing(baseType => "TypeName");
    config.SelectDiscriminatorValueUsing(subType => subType.Name);

    var controllersXmlFilename = $"{typeof(FamilyTree.Presentation.OpenApi.AssemblyReference).Assembly.GetName().Name}.xml";
    var contractsXmlFilename = $"{typeof(FamilyTree.Contracts.AssemblyReference).Assembly.GetName().Name}.xml";

    config.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, controllersXmlFilename));
    config.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, contractsXmlFilename));
    config.SupportNonNullableReferenceTypes();
});

builder.Services.AddRepositories(builder.Configuration.GetConnectionString("Database"));
builder.Services.AddServices();

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();
Console.WriteLine($"Starting in environemnt: {app.Environment.EnvironmentName}");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();

    app.UseCors(c =>
    {
        c.WithOrigins(new string[] { "https://localhost:3000" });
        c.AllowAnyMethod();
        c.AllowAnyHeader();
    });
}
else
{
    var options = new DefaultFilesOptions();
    options.DefaultFileNames.Clear();
    options.DefaultFileNames.Add("index.html");
    app.UseDefaultFiles(options);
    app.UseStaticFiles();
}

using (var scope = app.Services.CreateScope())
{
    await scope.ServiceProvider.AddDatabaseMigrations();
}

app.MapControllers();

app.Run();
