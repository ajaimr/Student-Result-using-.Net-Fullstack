using Microsoft.EntityFrameworkCore;
using Student_result_backend.Model;

namespace Student_result_backend.DataContext
{
    public class studentDbContext:DbContext
    {
        public studentDbContext(DbContextOptions<studentDbContext> options):base(options) {

        }
        public DbSet<ModelStudent> Students { get; set; }
        public DbSet<ModelAdmin> Admins { get; set; }
        public DbSet<addstudent> add { get; set; }
    }
}
