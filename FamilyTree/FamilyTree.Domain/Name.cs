namespace FamilyTree.Domain;

public class Name
{
    public string Id { get; set; }
    public string Firstname { get; set; }

    public string? Middlename { get; set; }

    public string Lastname { get; set; }

    public DateTime From { get; set; }
    public DateTime? To { get; set; }

    public Name(string firstname, string lastname, DateTime from) : this(firstname, null, lastname, from)
    {

    }
    public Name(string firstname, string? middlename, string lastname, DateTime from)
    {
        Id = Guid.NewGuid().ToString();
        Firstname = firstname;
        Middlename = middlename;
        Lastname = lastname;
        From = from;
    }
}
