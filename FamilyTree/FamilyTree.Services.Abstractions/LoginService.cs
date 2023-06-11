using FamilyTree.Domain;

namespace FamilyTree.Services.Abstractions;

public interface LoginService
{
    public Task<ExternalLoginPayload> ValidateAsync(string token);
}
