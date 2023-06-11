using Microsoft.AspNetCore.Identity;

namespace FamilyTree.Persistence.Identity;

public class ApplicationUser : IdentityUser
{
    public string FirstName { get; set; }
    
    public string FullName { get; set; }

    public string ImageUrl { get; set; }
}
