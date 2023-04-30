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

        builder.Property(x => x.ValidFrom);
        builder.Property(x => x.ValidTo);

        builder
            .HasOne(x => x.Person)
            .WithMany(x => x.RelationshipPerson)
            .HasForeignKey(x => x.PersonId)
            .IsRequired();

        builder
            .HasOne(x => x.Of)
            .WithMany(x => x.RelationshipOf)
            .HasForeignKey(x => x.OfId)
            .IsRequired();

        builder.Property(x => x.Is).IsRequired();
    }
}
