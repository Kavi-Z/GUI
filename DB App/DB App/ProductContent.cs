using Microsoft.EntityFrameworkCore;
using System;

namespace DB_App
{
    public class ProductContent : DbContext
    {
        public DbSet<Product> Products { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
            optionsBuilder.UseSqlite(@"Data Source=C:\Users\kavin\Desktop\SQLite\main.db");
        }
         
    }
}
