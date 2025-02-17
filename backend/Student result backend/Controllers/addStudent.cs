using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student_result_backend.DataContext;
using Student_result_backend.Model;

namespace Student_result_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class addStudent : ControllerBase
    {
        private readonly studentDbContext dbcontext;

        public addStudent(studentDbContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }


        [HttpPost]
        public IActionResult addData2([FromBody] addstudent addstu)
        {
            dbcontext.add.Add(addstu);
            dbcontext.SaveChanges();
            return Ok(addstu);
        }
        [HttpGet]
        public IActionResult getData()
        {
            List<addstudent> addstudent = dbcontext.add.ToList();
            return Ok(addstudent);
        }
        [HttpGet("{id}")]
        public IActionResult getById(int id)
        {
            var ab = dbcontext.add.FirstOrDefault(u => u.Id == id);
            if (ab == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(ab);
            }
        }
        [HttpPut("{id}")]
        public IActionResult update([FromBody] addstudent stu, int id)
        {
            var ab = dbcontext.add.FirstOrDefault(u => u.Id == id);
            if (ab == null)
            {
                return NotFound();
            }
            else
            {
                ab.Name = stu.Name;
                ab.reg = stu.reg;
                ab.dob = stu.dob;
                ab.tamil = stu.tamil;
                ab.english = stu.english;
                ab.maths = stu.maths;
                ab.social = stu.social;
                ab.science = stu.science;
                ab.social=stu.social;
                dbcontext.SaveChanges();
                return Ok(ab);
            }
        }
        [HttpDelete("{id}")]
        public IActionResult delete(int id)
        {
            var del = dbcontext.add.FirstOrDefault(p => p.Id == id);
            if (del == null)
            {
                return NotFound();
            }
            else
            {
                dbcontext.Remove(del);
                dbcontext.SaveChanges();
                return Ok(del);
            }
        }
    }
}
