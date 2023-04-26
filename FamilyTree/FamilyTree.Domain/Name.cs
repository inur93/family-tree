namespace FamilyTree.Domain;

public class Name
{
    public string Id { get; set; }
    public string Firstname { get; set; }

    public string? Middlename { get; set; }

    public string Lastname { get; set; }

    public DateTime From { get; set; }
    public DateTime? To { get; set; }
}
