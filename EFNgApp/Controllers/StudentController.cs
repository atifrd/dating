using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFNgApp.Models;
using EFNgApp.Models.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFNgApp.Controllers
{
  [Route("api/Student")]

  public class StudentController : Controller
  {
    private IDataRepository<Student, long> _iRepo;
    private ApplicationContext _context;
    public StudentController(IDataRepository<Student, long> repo, ApplicationContext context)
    {
      _context = context;
      _iRepo = repo;
    }

    // GET: api/values
    //[Route("Index")]

    [HttpGet]
    public async Task<IActionResult> Get()
    {

      var res = await _context.Students.Where(c=>c.StudentId> 0).ToListAsync();
      return Ok(res);
      //return _iRepo.GetAll();
    }

    // GET api/values/5
    [Route("api/Student/getbyid/{id}")]
    [HttpGet("{id}")]
    public Student Get(int id)
    {
      return _iRepo.Get(id);
    }

    // POST api/values
    [Route("api/Student/create")]
    [HttpPost]
    public void Post([FromBody]Student student)
    {
      _iRepo.Add(student);
    }

    // POST api/values
    [Route("api/Student/Edit")]
    [HttpPut]
    public void Put([FromBody]Student student)
    {
      _iRepo.Update(student.StudentId, student);
    }

    // DELETE api/values/5
    [Route("api/Student/Delete/{id}")]
    [HttpDelete("{id}")]
    public long Delete(int id)
    {
      return _iRepo.Delete(id);
    }
  }
}
