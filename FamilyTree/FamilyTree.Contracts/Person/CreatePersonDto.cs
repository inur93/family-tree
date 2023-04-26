using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Person;

public class CreatePersonDto
{
    [Required]
    public string Firstname { get; set; }

    public string? Middlename { get; set; }

    [Required]
    public string Lastname { get; set; }

    [Required]
    public DateTime Birthday { get; set; }

    [Required]
    public SexDto Sex { get; set; }
}
