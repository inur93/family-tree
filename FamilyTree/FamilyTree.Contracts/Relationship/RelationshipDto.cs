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
    public RelationshipTypeDto Type { get; set; }

    [Required]
    public string RelatedId { get; set; }

    public DateTime? From { get; set; }

    public DateTime? To { get; set; }
}
