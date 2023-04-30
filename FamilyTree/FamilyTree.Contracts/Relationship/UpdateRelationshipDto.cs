namespace FamilyTree.Contracts.Relationship;

public class UpdateRelationshipDto
{
    public DateTime? ValidFrom { get; set; }

    public DateTime? ValidTo { get; set; }

    public DateTime? MarriedOn { get; set; }
}
