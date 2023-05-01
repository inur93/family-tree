using FamilyTree.Contracts.Name;
using FamilyTree.Contracts.Relationship;
using System.ComponentModel.DataAnnotations;

namespace FamilyTree.Contracts.Person;

public class PersonDto
{
    [Required]
    public string Id { get; set; }

    [Required]
    public NameDto CurrentName { get; set; }

    [Required]
    public DateTime Birthday { get; set; }

    [Required]
    public SexDto Sex { get; set; }

    [Required]
    public ICollection<PersonalRelationshipDto> Relationships { get; set; }

    [Required]
    public ICollection<PersonalRelationshipDto> Children => Relationships
        .Where(x => x.Is.HasFlag(RelationshipTypeDto.Parent))
        .ToList();

    public PersonalRelationshipDto? Partner => Relationships
        .FirstOrDefault(x =>
        x.Is.HasFlag(RelationshipTypeDto.Partner) &&
        x.ValidTo == null);
}