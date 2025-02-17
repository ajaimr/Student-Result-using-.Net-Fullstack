//using System.Data.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student_result_backend.DataContext;
using Student_result_backend.Model;

namespace Student_result_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        private readonly studentDbContext dbcontext;

        public adminController(studentDbContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }


        [HttpPost]
        public IActionResult addData2([FromBody] ModelAdmin modeladmin)
        {
            dbcontext.Admins.Add(modeladmin);
            dbcontext.SaveChanges();
            return Ok(modeladmin);
        }
        [HttpGet]
        public IActionResult getData()
        {
            List<ModelAdmin> Admins = dbcontext.Admins.ToList();
            return Ok(Admins);
        }
    }
}
