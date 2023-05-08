using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Relationship;

/// <summary>
/// Relationship where <see cref="PersonId"/> is <see cref="Type"/> to <see cref="RelatedId"/>
/// e.g. "Bobby" is "Child" to "Sally"
/// </summary>
public class RelationshipDto
{
    [Required]
    public string Id { get; set; }

    [Required]
    public string PersonId { get; set; }

    [Required]
    public RelationshipTypeDto Is { get; set; }

    [Required]
    public string OfId { get; set; }

    public DateTime? MarriedOn { get; set; }

    public DateTime? ValidFrom { get; set; }

    public DateTime? ValidTo { get; set; }
}
