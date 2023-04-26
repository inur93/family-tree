using FamilyTree.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FamilyTree.Persistence.Configurations;

public class PersonConfiguration : IEntityTypeConfiguration<Person>
{
    public void Configure(EntityTypeBuilder<Person> builder)
    {
        builder.ToTable(nameof(Person));

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.HasMany(x => x.Names).WithOne();

        builder.Ignore(x => x.Relationships);

        builder.HasMany(x => x.RelationshipPerson)
            .WithOne(x => x.Person)
            .HasForeignKey(x => x.PersonId)
            .IsRequired();

        builder.HasMany(x => x.RelationshipRelated)
            .WithOne(x => x.Related)
            .HasForeignKey(x => x.RelatedId)
            .IsRequired();

        //the relationship is instead configured on the relationship entity
        //builder.Ignore(x => x.Relationships);

        builder.Property(x => x.Birthday).IsRequired();
        
        builder.Property(x => x.Sex).IsRequired();

        builder.Ignore(x => x.CurrentName);

    }
}
