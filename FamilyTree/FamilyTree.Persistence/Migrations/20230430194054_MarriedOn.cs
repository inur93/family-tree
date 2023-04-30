using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FamilyTree.Persistence.Migrations
{
    public partial class MarriedOn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "MarriedOn",
                table: "Relationship",
                type: "timestamp with time zone",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MarriedOn",
                table: "Relationship");
        }
    }
}
