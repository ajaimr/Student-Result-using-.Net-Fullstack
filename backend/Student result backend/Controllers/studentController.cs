using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Student_result_backend.DataContext;
using Student_result_backend.Model;

namespace Student_result_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class studentController : ControllerBase
    {
        private readonly studentDbContext dbcontext;

        public studentController(studentDbContext dbcontext ) {
            this.dbcontext = dbcontext;
        }
        [HttpPost]

        public IActionResult addData([FromBody] ModelStudent modelstudent)
        {
            dbcontext.Students.Add(modelstudent);
            dbcontext.SaveChanges();
            return Ok(modelstudent);
        }


        [HttpGet]
        public IActionResult getData2()
        {
            List<ModelStudent> student = dbcontext.Students.ToList();
            return Ok(student);
        }

    }
}
