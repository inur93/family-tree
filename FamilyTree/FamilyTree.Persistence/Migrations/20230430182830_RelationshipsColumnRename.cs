using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FamilyTree.Persistence.Migrations
{
    public partial class RelationshipsColumnRename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Relationship_Person_RelatedId",
                table: "Relationship");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Relationship",
                newName: "Is");

            migrationBuilder.RenameColumn(
                name: "To",
                table: "Relationship",
                newName: "ValidTo");

            migrationBuilder.RenameColumn(
                name: "RelatedId",
                table: "Relationship",
                newName: "OfId");

            migrationBuilder.RenameColumn(
                name: "From",
                table: "Relationship",
                newName: "ValidFrom");

            migrationBuilder.RenameIndex(
                name: "IX_Relationship_RelatedId",
                table: "Relationship",
                newName: "IX_Relationship_OfId");

            migrationBuilder.AddColumn<bool>(
                name: "IsMarried",
                table: "Relationship",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Relationship_Person_OfId",
                table: "Relationship",
                column: "OfId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Relationship_Person_OfId",
                table: "Relationship");

            migrationBuilder.DropColumn(
                name: "IsMarried",
                table: "Relationship");

            migrationBuilder.RenameColumn(
                name: "ValidTo",
                table: "Relationship",
                newName: "To");

            migrationBuilder.RenameColumn(
                name: "ValidFrom",
                table: "Relationship",
                newName: "From");

            migrationBuilder.RenameColumn(
                name: "OfId",
                table: "Relationship",
                newName: "RelatedId");

            migrationBuilder.RenameColumn(
                name: "Is",
                table: "Relationship",
                newName: "Type");

            migrationBuilder.RenameIndex(
                name: "IX_Relationship_OfId",
                table: "Relationship",
                newName: "IX_Relationship_RelatedId");

            migrationBuilder.AddForeignKey(
                name: "FK_Relationship_Person_RelatedId",
                table: "Relationship",
                column: "RelatedId",
                principalTable: "Person",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
