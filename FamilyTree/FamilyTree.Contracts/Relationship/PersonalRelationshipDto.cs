using FamilyTree.Contracts.Person;
using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Relationship;

/// <summary>
/// Relationship used in the context of a specific person.
/// where <see cref="Person"/> is <see cref="Type"/> to the person in question
/// e.g. "Bobby" is "Child" to "Sally"
/// </summary>
public class PersonalRelationshipDto
{
    [Required]
    public string Id { get; set; }

    [Required]
    public RelationshipTypeDto Is { get; set; }

    [Required]
    public BasicPersonDto Person { get; set; }

    public DateTime? MarriedOn { get; set; }

    public DateTime? ValidFrom { get; set; }

    public DateTime? ValidTo { get; set; }
}
