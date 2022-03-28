using Baseball.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Baseball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public userController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginModel userobj)
        {

            if(userobj == null)
            {
                return BadRequest();
                
            }
            else
            {
                var user = _context.LoginModels.Where(a => a.Email == userobj.Email && a.Password == userobj.Password).FirstOrDefault();
                if(user == null)
                {
                    return Ok(new
                    {
                        StatusCode = 200,
                        Message = "True"
                    });
                }
                else
                {
                    return NotFound(new
                    {
                        StatusCode = 404,
                        Message = "False"
                    });
                }
            }
        }
        [HttpPost("signup")]
        public IActionResult SignUp([FromBody] UserModel userobj)
        {
            if (userobj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.UserModels.Add(userobj);
                _context.SaveChanges();
                return Ok( new
                {
                    StatusCode=200,
                    Message="User Added"
                });
            }
        }
         [HttpPost("bookEvent")]
        public IActionResult BookEvent([FromBody] EventModel eventobj)
        {
            if(eventobj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.EventModels.Add(eventobj);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode=200,
                        Message ="Event added"

                    });
            }
        }
        [HttpPut("editEvent/{id}")]
        public IActionResult EditEvent([FromBody] EventModel eventobj)
        {
            if(eventobj==null)
            {
                return BadRequest();
            }
            var user =_context.EventModels.AsNoTracking().FirstOrDefault(x=>x.EventId == eventobj.EventId);
         if(user==null)
            {
                return NotFound(
                    new
                    {
                        StatusCode=400,
                        Message="User Not Found"
                    });
            }
            else
            {
                _context.Entry(eventobj).State=EntityState.Modified;
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode=200,
                        Message="Event Updated"
                    });

            }
        }
        [HttpDelete("deleteEvent/{id}")]
        public IActionResult CancelEvent(int id )
        {
            var user = _context.EventModels.Find(id);
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
        // [HttpGet("getSchedule")]
        // public IActionResult ViewBookedEvent()
        // {
        //     var events = _context.EventModels.AsQueryable();
        //     return Ok(new
        //     {
        //         StatusCode = 200,
        //         Employee_Details = events
        //     });
        // }

    }
}

        
