using Microsoft.EntityFrameworkCore;

namespace PhoneCatalogAPI.Data
{
    public class DatabaseContext : DbContext
    {
        protected readonly IConfiguration Configuration;

        public DatabaseContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlite(Configuration.GetConnectionString("ApiDatabase"));
        }

        public DbSet<Phone> Phones { get; set; }
    }
}
