using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using EFNgApp.Models;
using EFNgApp.Models.DataManager;
using EFNgApp.Models.Repository;
using Microsoft.Extensions.Configuration;
namespace EFNgApp
{
  public class Startup
  {
    public IConfiguration configuration;
    public Startup(IConfiguration _configuration)
    {
      configuration = _configuration;
    }
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      // Add framework services.

      services.AddDbContext<ApplicationContext>(opts => opts.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
      services.AddSingleton(typeof(IDataRepository<Student, long>), typeof(StudentManager));
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.UseCors(c => c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.Run(async (context) =>
      {
        await context.Response.WriteAsync("Hello World!");
      });
    }
  }
}
