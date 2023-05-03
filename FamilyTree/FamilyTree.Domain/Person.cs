using System.Globalization;

namespace FamilyTree.Domain;

public class Person
{
    public string Id { get; set; }

    public Name CurrentName => Names.OrderByDescending(x => x.From).First();

    public ICollection<Name> Names { get; set; } = new List<Name>();

    public DateTime Birthday { get; set; }

    public Sex Sex { get; set; }

    public ICollection<Relationship> Relationships => RelationshipPerson.Concat(RelationshipOf).ToList();

    public virtual ICollection<Relationship> RelationshipPerson { get; set; } = new List<Relationship>();
    public virtual ICollection<Relationship> RelationshipOf { get; set; } = new List<Relationship>();

    public Person() { }
    public Person(string firstname, string lastname, DateTime birthday, Sex sex)
        : this(firstname, null, lastname, birthday, sex)
    {
    }
    public Person(string firstname, string? middlename, string lastname, DateTime birthday, Sex sex)
    {
        Id = Guid.NewGuid().ToString();
        Names.Add(new Name(firstname, middlename, lastname, birthday));
        Birthday = birthday;
        Sex = sex;
    }
}