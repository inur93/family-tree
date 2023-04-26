namespace FamilyTree.Domain;

public class Relationship
{
    public string Id { get; set; }

    public string PersonId { get; set; }
    public virtual Person Person { get; set; }

    public RelationshipType Type { get; set; }

    public string RelatedId { get; set; }
    public virtual Person Related { get; set; }

    public DateTime? From { get; set; }

    public DateTime? To { get; set; }
    
}
