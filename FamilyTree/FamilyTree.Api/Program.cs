using FamilyTree.Api.Configurations;
using System.Text.Json.Serialization;
using FamilyTree.Persistence;
using FamilyTree.Presentation.OpenApi;
using FamilyTree.Services;
using Microsoft.AspNetCore.Authentication.Cookies;
using Duende.IdentityServer;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
// Add services to the container.

builder.Services.Configure<GoogleOptions>(x =>
{
    builder.Configuration.GetSection("Authentication:Google").Bind(x);
});

builder.Services.AddRepositories(builder.Configuration.GetConnectionString("Database"));
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


builder.Services.AddIdentity();

builder.Services.Configure<CookiePolicyOptions>(options =>
{
    options.MinimumSameSitePolicy = SameSiteMode.None;

});

builder.Services.Configure<CookieAuthenticationOptions>(IdentityServerConstants.DefaultCheckSessionCookieName, options =>
{
    options.Cookie.SameSite = SameSiteMode.None;
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
});


builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.SameSite = SameSiteMode.None;
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
    options.Events.OnRedirectToLogin = context =>
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return Task.CompletedTask;
    };
});

builder.Services.ConfigureExternalCookie(options =>
{
    options.ExpireTimeSpan = TimeSpan.FromDays(1);
    options.Cookie.SameSite = SameSiteMode.None;
});

builder.Services.AddHttpClient();
builder.Services.AddServices();


var app = builder.Build();


// add middleware
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication();
app.UseIdentityServer();
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
        c.AllowCredentials();
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
    if (app.Environment.IsDevelopment())
    {
        await scope.ServiceProvider.AddDatabaseTestData();
    }
}

app.MapControllers();
app.Run();
