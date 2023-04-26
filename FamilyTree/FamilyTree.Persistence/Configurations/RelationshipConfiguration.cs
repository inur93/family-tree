using FamilyTree.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FamilyTree.Persistence.Configurations;

public class RelationshipConfiguration : IEntityTypeConfiguration<Relationship>
{
    public void Configure(EntityTypeBuilder<Relationship> builder)
    {
        builder.ToTable(nameof(Relationship));

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(x => x.From);
        builder.Property(x => x.To);

        builder
            .HasOne(x => x.Person)
            .WithMany(x => x.RelationshipPerson)
            .HasForeignKey(x => x.PersonId)
            .IsRequired();

        builder
            .HasOne(x => x.Related)
            .WithMany(x => x.RelationshipRelated)
            .HasForeignKey(x => x.RelatedId)
            .IsRequired();

        builder.Property(x => x.Type).IsRequired();
    }
}
