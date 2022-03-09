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
    public class VenueController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public  VenueController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpPost("addVenue")]
        public IActionResult AddVenue([FromBody] VenueModel venueObj)
        {
            if (venueObj == null)
            {
                return BadRequest();
            }
            else
            {
                _context.VenueModels.Add(venueObj);
                _context.SaveChanges();
                return Ok(new
                {
                    StausCode = 200,
                    Message = "Venue Added Successfully"
                });
            }

        }
        /*[HttpGet("getvenue/{id}")]
        public IActionResult GetVenue(int id)
        {
            var user=_context.VenueModels.Find(id);
            if (user == null)
            {
                return NotFound(
                    new
                    {
                        StatusCode = 404,
                        Message ="Venue NOT Found"
                    });
            }
            else
            {
                return Ok(
                    new
                    {
                     StatusCode=200,
                       VenueDetail=user
                    });
            }
        }
        [HttpPut("editVenue/{id}")]
        public IActionResult editVenue(int id)
        {
            var user = _context.VenueModels.Find(id);
            if(user == null)
            {
                return NotFound(
                    new
                    {
                        StatusCode =200,
                        Message="Venue Not Found"
                    });
            }
            else
            {
                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode=200,
                        Message="Venue is Updated"
                    });
            }
        }*/
        [HttpPut("edit/{id}")]
        public IActionResult UpdateEmployee(int id,[FromBody] VenueModel venue)
        {
            if (venue == null)
            {
                return BadRequest();
            }
            var user = _context.VenueModels.AsNoTracking().FirstOrDefault(x => x.VenueId == venue.VenueId);
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
                _context.Entry(venue).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "The Venue updated successfully "
                });
            }
        }
        [HttpGet("getVenue/{id}")]
        public IActionResult getVenue(int id)
        {
            var venue= _context.VenueModels.Find(id);
            if(venue == null)
            {
                return NotFound(
                    new
                    {
                        StatusCode=404,
                        Message="User NOt Found"
                    });
            }
            else
            {
                return Ok(
                    new
                    {
                        StatusCode = 200,
                        VenueDetail = venue,
                    }
                );
            }
        }
        [HttpGet("getAllVenue")]
        public IEnumerable<VenueModel> getUsers()
        {

            {
                var venue = _context.VenueModels.ToList();
                return venue;
            }
        }
        [HttpDelete("deleteVenue/{id}")]
        public IActionResult deleteVenue(int id)
        {
            var venue=_context.VenueModels.Find(id);
            if(venue==null)
            {
                return NotFound(
                    new {
                        StatusCode=404,
                        Message="Venue Not Found"
                    }
                );
            }
            else{
                _context.Remove(venue);
                _context.SaveChanges();
                return Ok(
                    new {
                        StatusCode=200,
                        Message="Deleted the Venue"
                    }
                );
            }
        }

    }
}
