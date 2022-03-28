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
    public class RefreeController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public RefreeController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpGet("getRefree")]
        public IEnumerable<RefreeModel> getRefree()
        {

            {
                var users = _context.RefreeModels.ToList();
                return users;
            }
        }
        [HttpPut("edit/{id}")]
        public IActionResult updateRefree(int id, [FromBody] RefreeModel refree)
        {
            if (refree == null)
            {
                return BadRequest();
            }
            var user = _context.RefreeModels.AsNoTracking().FirstOrDefault(x => x.RefreeId == refree.RefreeId);
            if (user == null)
            {
                return NotFound(new
                {
                    StausCode = 404,
                    Message = "Refree Not Found"
                });
            }
            else
            {
                _context.Entry(refree).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "The Refree updated successfully "
                });
            }
        }
        [HttpDelete("deleteRefree/{id}")]
        public IActionResult deleteRefree(int id)
        {
            var refree = _context.RefreeModels.Find(id);
            if (refree == null)
            {
                return NotFound(
                    new
                    {
                        StatusCode = 404,
                        Message = "Refree Not Found"
                    }
                );
            }
            else
            {
                _context.Remove(refree);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode = 200,
                        Message = "Deleted the Refree"
                    }
                );
            }
        }
        [HttpPost("addRefree")]
        public IActionResult AddVenue([FromBody] RefreeModel refree)
        {
            if (refree == null)
            {
                return BadRequest();
            }
            else
            {
                _context.RefreeModels.Add(refree);
                _context.SaveChanges();
                return Ok(new
                {
                    StausCode = 200,
                    Message = "Refree Added Successfully"
                });
            }

        }
    }
}
