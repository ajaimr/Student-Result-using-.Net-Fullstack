﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Student_result_backend.Migrations
{
    /// <inheritdoc />
    public partial class mig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "total",
                table: "add",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "total",
                table: "add");
        }
    }
}
