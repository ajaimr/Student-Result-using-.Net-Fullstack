
using Microsoft.EntityFrameworkCore;
using Student_result_backend.DataContext;

namespace Student_result_backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var cs = builder.Configuration.GetConnectionString("student");
            builder.Services.AddDbContext<studentDbContext>(p=>p.UseSqlServer(cs));
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            
            app.UseHttpsRedirection();
            app.UseCors(p=>p.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
