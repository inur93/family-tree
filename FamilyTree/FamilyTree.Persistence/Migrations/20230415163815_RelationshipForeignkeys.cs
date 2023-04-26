using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FamilyTree.Persistence.Migrations
{
    public partial class RelationshipForeignkeys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Relationship_Person_PersonId1",
                table: "Relationship");

            migrationBuilder.DropIndex(
                name: "IX_Relationship_PersonId1",
                table: "Relationship");

            migrationBuilder.DropColumn(
                name: "PersonId1",
                table: "Relationship");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PersonId1",
                table: "Relationship",
                type: "text",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Relationship_PersonId1",
                table: "Relationship",
                column: "PersonId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Relationship_Person_PersonId1",
                table: "Relationship",
                column: "PersonId1",
                principalTable: "Person",
                principalColumn: "Id");
        }
    }
}
