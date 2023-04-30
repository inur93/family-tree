using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Relationship;

public class CreateRelationshipDto
{
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
