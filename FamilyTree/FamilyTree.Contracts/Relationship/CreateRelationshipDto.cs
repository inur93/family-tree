using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Relationship;

public class CreateRelationshipDto
{
    [Required]
    public string PersonId { get; set; }

    [Required]
    public RelationshipTypeDto Type { get; set; }

    [Required]
    public string RelatedId { get; set; }

    public DateTime? From { get; set; }

    public DateTime? To { get; set; }
}
