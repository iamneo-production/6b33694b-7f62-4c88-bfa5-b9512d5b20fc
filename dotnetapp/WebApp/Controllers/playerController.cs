using Baseball.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Baseball.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerController : Controller
    {
        private readonly baseball_tContext _context;
        public PlayerController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpGet("getPlayer")]
        public IEnumerable<PlayerModel> getPlayer()
        {

            {
                var users = _context.PlayerModels.ToList();
                return users;
            }
        }

        [HttpGet("getPlayers/{id}")]
        public IEnumerable<PlayerModel> getPlayer(int id)
        {

            {
                var players = _context.PlayerModels.Where(player => player.TeamId == id).ToList();
                return players;
            }
        }

        //[HttpPut("edit/{id}")]
        //public IActionResult updateRefree(int id, [FromBody] RefreeModel refree)
        //{
        //    if (refree == null)
        //    {
        //        return BadRequest();
        //    }
        //    var user = _context.RefreeModels.AsNoTracking().FirstOrDefault(x => x.RefreeId == refree.RefreeId);
        //    if (user == null)
        //    {
        //        return NotFound(new
        //        {
        //            StausCode = 404,
        //            Message = "User NOt Found"
        //        });
        //    }
        //    else
        //    {
        //        _context.Entry(refree).State = EntityState.Modified;
        //        _context.SaveChanges();
        //        return Ok(new
        //        {
        //            StatusCode = 200,
        //            Message = "The Refree updated successfully "
        //        });
        //    }
        //}
        [HttpDelete("deletePlayer/{id}")]
        public IActionResult deletePlayer(string id)
        {
            var player = _context.PlayerModels.Find(id);
            if (player == null)
            {
                return NotFound(
                    new
                    {
                        StatusCode = 404,
                        Message = "Venue Not Found"
                    }
                );
            }
            else
            {
                _context.Remove(player);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode = 200,
                        Message = "Deleted the Venue"
                    }
                );
            }
        }
        [HttpPost("addPlayer")]
        public IActionResult AddPlayer([FromBody] PlayerModel player)
        {
            if (player == null)
            {
                return BadRequest();
            }
            else
            {
                _context.PlayerModels.Add(player);
                _context.SaveChanges();
                return Ok(new
                {
                    StausCode = 200,
                    Message = "Player Added Successfully"
                });
            }

        }
    }
}
