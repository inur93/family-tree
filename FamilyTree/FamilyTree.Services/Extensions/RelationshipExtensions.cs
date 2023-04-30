using FamilyTree.Contracts;
using FamilyTree.Contracts.Relationship;
using FamilyTree.Domain;

namespace FamilyTree.Services.Extensions;

public static class RelationshipExtensions
{
    public static PersonalRelationshipDto Map(this Relationship relationship, string personId)
    {
        return new PersonalRelationshipDto
        {
            Id = relationship.Id,
            MarriedOn = relationship.MarriedOn,
            ValidFrom = relationship.ValidFrom,
            ValidTo = relationship.ValidTo,
            Person = (relationship.OfId == personId ? relationship.Person : relationship.Of).MapBasic(),
            Is = GetRelationshipType(personId, relationship),
            };
    }

    public static Relationship Map(this CreateRelationshipDto relationship)
    {
        var flipType = relationship.Is.HasFlag(RelationshipTypeDto.Parent);
        return new Relationship
        {
            IsMarried = relationship.Is.HasFlag(RelationshipTypeDto.Spouse),
            PersonId = flipType ? relationship.OfId : relationship.PersonId,
            OfId = flipType ? relationship.PersonId : relationship.OfId,
            Is = relationship.Is.HasFlag(RelationshipTypeDto.Partner) ? RelationshipType.Partner : RelationshipType.Child,
            MarriedOn = relationship.MarriedOn,
            ValidFrom = relationship.ValidFrom,
            ValidTo = relationship.ValidTo,
        };
    }

    private static RelationshipTypeDto GetRelationshipType(string personId, Relationship relationship)
    {
        var other = relationship.PersonId == personId ? relationship.Of : relationship.Person;
        switch (relationship.Is)
        {
            case RelationshipType.Partner:
                if (relationship.IsMarried)
                {
                    return other.Sex == Sex.Male ?
                        RelationshipTypeDto.Husband :
                        RelationshipTypeDto.Wife;
                }
                else
                {
                    return other.Sex == Sex.Male ?
                        RelationshipTypeDto.Boyfriend :
                        RelationshipTypeDto.Girlfriend;
                }
            case RelationshipType.Child:

                if (relationship.PersonId == personId)
                {
                    return other.Sex == Sex.Male ?
                        RelationshipTypeDto.Father :
                        RelationshipTypeDto.Mother;
                }
                else
                {
                    return other.Sex == Sex.Male ?
                        RelationshipTypeDto.Son :
                        RelationshipTypeDto.Daughter;
                }
            default:
                throw new ArgumentException($"{relationship.Is} is not recognized as a relationship type");
        }
    }
}
