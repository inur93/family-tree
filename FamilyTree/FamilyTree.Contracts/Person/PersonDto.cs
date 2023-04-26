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
    public ICollection<RelationshipDto> Relationships { get; set; }

    [Required]
    public ICollection<RelationshipDto> Siblings => Relationships
        .Where(x => x.RelatedId == Id && x.Type == RelationshipTypeDto.Child)
        .ToList();

    [Required]
    public ICollection<RelationshipDto> Children => Relationships
        .Where(x => x.PersonId == Id && x.Type != RelationshipTypeDto.Child)
        .ToList();

    [Required]
    public RelationshipDto? Spouse => Relationships
        .FirstOrDefault(x =>
        x.Type == RelationshipTypeDto.Spouse &&
        x.To == null &&
        (x.PersonId == Id || x.RelatedId == Id));
}