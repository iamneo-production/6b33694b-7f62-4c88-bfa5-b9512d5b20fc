using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Baseball.Model;


namespace Baseball.Controllers
{
    [Route("")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public AuthController(baseball_tContext context){
            _context = context;
        }
        [HttpPost("user/login")]
        public IActionResult IsUserPresent([FromBody] LoginModel data)
        {
            var user = _context.UserModels.Find(data.Email);
            
            if (user != null && data.Email.Equals(user.Email) && data.Password.Equals(user.Password))
            {
                return Ok(new { StatusCode = 200, Message = "User Authenticated", Allowed = true , User =  user.Email});

            }
            return BadRequest(new { StatusCode = 400 , Message = "User Not Available", Allowed = false });
        }


        [HttpPost("user/signup")]
        public IActionResult saveUser(UserModel data)
        {
            var user = _context.UserModels.Find(data.Email);
                    
            if (user == null)
            {
                _context.UserModels.Add(data);
                _context.SaveChanges();
                
                return Ok(new { StatusCode = 200, Message = "User Added", Allowed = true });
            }
            return BadRequest(new { StatusCode = 404 , Message = "Already a User Available", Allowed = false });
        }




        [HttpPost("admin/login")]
        public IActionResult isAdminPresent([FromBody] LoginModel data)
        {
            var user = _context.UserModels.Find(data.Email);
            //  && user.UserRole.Equals("admin")
            if ((data.Email.Equals(user.Email) && data.Password.Equals(user.Password)))
            {
                return Ok(new { StatusCode = 200, Message = "Admin Authenticated", Allowed = true } );
            }
            return BadRequest(new { StatusCode = 404, Message = "Admin Not Found", Allowed = false });

        }
       


        [HttpPost("admin/signup")]

        public IActionResult saveAdmin(UserModel data)
        {
            var user = _context.UserModels.Find(data.Email);
            if (user == null)
            {
                _context.UserModels.Add(data);
                _context.AdminModels.Add(new AdminModel { Email = data.Email, 
                            Password = data.Password , MobileNumber = data.MobileNumber , UserRole = data.UserRole});
                return Ok(new { StatusCode = 200, Message = "Admin Added SuccessFully" });
            }
            return BadRequest(new { StatusCode = 400, Message = "Admin Already Avaliable" });

        }
    }
}
