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
    public class EventBookingController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public EventBookingController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpPost("bookEvent")]
        public IActionResult  bookEvent( [FromBody] BookingModel book)
        {
            if (book == null)
            {
                return BadRequest();
            }
            else
            {
                _context.BookingModels.Add(book);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode = 200,
                        Message = "Booking Done Successfully"
                    });

            }
        }
        [HttpGet("booked/{id}")]
        public IEnumerable<BookingModel> GetRefree(string id)
        {

            {
               var bookings =_context.BookingModels.Where(booking => booking.ApplicantEmail==id).ToList();
            //    Debug.WriteLine(bookings);
               return bookings;
            }
        }
        [HttpPut("editBooked/{id}")]
        public IActionResult updatebok(int id, [FromBody] BookingModel booking)
        {
            if (booking == null)
            {
                return BadRequest();
            }
            var booked = _context.BookingModels.AsNoTracking().FirstOrDefault(x => x.BookingId == booking.BookingId);
            if (booked == null)
            {
                return NotFound(new
                {
                    StausCode = 404,
                    Message = "User NOt Found"
                });
            }
            else
            {
                _context.Entry(booking).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "The Booking updated successfully "
                });
            }
        }
        [HttpDelete("deletebooking/{id}")]
        public IActionResult deletebooking(int id)
        {
            var booking = _context.BookingModels.Find(id);
            if (booking == null)
            {
                return NotFound(
                    new
                    {
                        Status = 404,
                        Message = "Booking Not Found"
                    });
            }
            else
            {
                _context.Remove(booking);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode = 200,
                        Message = "Booking Deleted Successfully"
                    });

            }
        }


    }
}
