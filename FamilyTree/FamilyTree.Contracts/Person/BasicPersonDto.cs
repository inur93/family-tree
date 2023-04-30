using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Person;

/// <summary>
/// Person DTO used in lists and other related objects, to reduce amount of data
/// </summary>
public class BasicPersonDto
{
    [Required]
    public string Id { get; set; }

    [Required]
    public string DisplayName { get; set; }

    [Required]
    public DateTime Birthday { get; set; }

    [Required]
    public SexDto Sex { get; set; }

}