using FamilyTree.Contracts;
using FamilyTree.Contracts.Name;
using FamilyTree.Contracts.Person;
using FamilyTree.Domain;
using Mapster;

namespace FamilyTree.Services.Extensions;

public static class PersonExtensions
{
    public static IEnumerable<PersonDto> Map(this IEnumerable<Person> people)
    {
        return people.Select(x => x.Map());
    }

    public static PersonDto Map(this Person person)
    {
        return new PersonDto
        {
            Id = person.Id,
            Birthday = person.Birthday,
            CurrentName = person.CurrentName.Adapt<NameDto>(),
            Sex = person.Sex.Adapt<SexDto>(),
            Relationships = person.Relationships.Select(x => x.Map(person.Id)).ToList(),
        };
    }

    public static IEnumerable<BasicPersonDto> MapBasic(this IEnumerable<Person> people)
    {
        return people.Select(x => x.MapBasic());
    }

    public static BasicPersonDto MapBasic(this Person person)
    {
        return new BasicPersonDto
        {
            Id = person.Id,
            Birthday = person.Birthday,
            DisplayName = person.CurrentName.Adapt<NameDto>().DisplayName,
            Sex = person.Sex.Adapt<SexDto>()
        };
    }
}
