using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Name;

public class NameDto
{
    [Required]
    public string Id { get; set; }

    [Required]
    public string DisplayName => string.Join(" ", new[] { Firstname, Middlename, Lastname }.Where(x => x != null));
    
    [Required]
    public string Firstname { get; set; }

    public string? Middlename { get; set; }

    [Required]
    public string Lastname { get; set; }

    [Required]
    public DateTime From { get; set; }
    
    public DateTime? To { get; set; }
}
