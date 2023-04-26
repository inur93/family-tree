using FamilyTree.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FamilyTree.Persistence.Configurations;

public class NameConfiguration : IEntityTypeConfiguration<Name>
{
    public void Configure(EntityTypeBuilder<Name> builder)
    {
        builder.ToTable(nameof(Name));

        builder.HasKey(x => x.Id);
        builder.Property(x => x.Id).ValueGeneratedOnAdd();

        builder.Property(x => x.Firstname).IsRequired();
        builder.Property(x => x.Middlename);
        builder.Property(x => x.Lastname).IsRequired();

        builder.Property(x => x.From).IsRequired();
        builder.Property(x => x.To);
    }
}
