using Baseball.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Baseball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class adminController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public adminController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpGet("getUsers")]
        public IEnumerable<UserModel> getUsers()
        {

            {
                var users = _context.UserModels.Where(user=> user.UserRole =="user").ToList();
                return users;
            }
        }
        [HttpPut("edit")]
        public IActionResult UpdateEmployee([FromBody] UserModel useobj)
        {
            if (useobj == null)
            {
                return BadRequest();
            }
            
            var user = _context.UserModels.AsNoTracking().FirstOrDefault(x => x.Email == useobj.Email); 
            if (user == null)
            {
                return NotFound(new
                {
                    StausCode = 404,
                    Message = "User NOt Found"
                });
            }
            else
            {
                _context.Entry(useobj).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "The user updated successfully "
                });
            }
        }
        [HttpDelete("user_delete/{Username}")]
        public IActionResult Delete(string Username)
        {
            var user = _context.UserModels.AsNoTracking().FirstOrDefault(x => x.Username == Username);
            if (user == null)
            {
                return NotFound(new
                {
                    StausCode = 404,
                    Message = "User Not Found"
                });
            }
            else
            {
                _context.Remove(user);
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "Deleted successfully"
                });
            }

        }

    }
}
