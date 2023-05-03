namespace FamilyTree.Domain;

public class Relationship
{
    public string Id { get; set; }

    public string PersonId { get; set; }
    public virtual Person Person { get; set; }

    public RelationshipType Is { get; set; }

    public string OfId { get; set; }
    public virtual Person Of { get; set; }

    public bool IsMarried { get; set; }

    public DateTime? MarriedOn { get; set; }

    public DateTime? ValidFrom { get; set; }

    public DateTime? ValidTo { get; set; }

    public Relationship() { }

    public Relationship(Person person, RelationshipType @is, Person of)
        : this(person, @is, of, null) { }

    public Relationship(Person person, RelationshipType @is, Person of, DateTime? marriedOn)
    {
        Id = Guid.NewGuid().ToString();
        PersonId = person.Id;
        Person = person;
        Is = @is;
        Of = of;
        OfId = of.Id;
        MarriedOn = marriedOn;
        IsMarried = marriedOn != null;
    }

}
