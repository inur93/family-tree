namespace FamilyTree.Domain;

public class Person
{
    public string Id { get; set; }

    public Name CurrentName => Names.OrderByDescending(x => x.From).First();

    public ICollection<Name> Names { get; set; } = new List<Name>();

    public DateTime Birthday { get; set; }

    public Sex Sex { get; set; }

    public ICollection<Relationship> Relationships => RelationshipPerson.Concat(RelationshipRelated).ToList();

    public virtual ICollection<Relationship> RelationshipPerson { get; set; } = new List<Relationship>();
    public virtual ICollection<Relationship> RelationshipRelated { get; set; } = new List<Relationship>();
}