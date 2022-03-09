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
    public class TeamController : ControllerBase
    {
        private readonly baseball_tContext _context;
        public TeamController(baseball_tContext baseball_TContext)
        {
            _context = baseball_TContext;
        }
        [HttpGet("getTeam")]
        public IEnumerable<TeamModel> getRefree()
        {

            {
                var teams = _context.TeamModels.ToList();
                return teams;
            }
        }
        [HttpPut("editTeam/{id}")]
        public IActionResult updateTeam(int id, [FromBody] TeamModel team)
        {
            if (team == null)
            {
                return BadRequest();
            }
            var teams = _context.TeamModels.AsNoTracking().FirstOrDefault(x => x.TeamId == team.TeamId);
            if (teams == null)
            {
                return NotFound(new
                {
                    StausCode = 404,
                    Message = "User NOt Found"
                });
            }
            else
            {
                _context.Entry(team).State = EntityState.Modified;
                _context.SaveChanges();
                return Ok(new
                {
                    StatusCode = 200,
                    Message = "The Team updated successfully "
                });
            }
        }
        [HttpPost("addTeam")]
        public IActionResult addteam([FromBody] TeamModel team)
        {
            if(team == null)
            {
                return BadRequest();
            }
            else
            {
                _context.TeamModels.Add(team);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode= 200,
                        Message="Team Added Successfully"
                    });

            }
        }
        [HttpDelete("deleteTeam/{id}")]
        public IActionResult deleteTeam(int id)
        {
            var team = _context.TeamModels.Find(id);
            if(team == null)
            {
                return NotFound(
                    new
                    {
                        Status =404,
                        Message ="Team Not Found"
                    });
            }
            else
            {
                _context.Remove(team);
                _context.SaveChanges();
                return Ok(
                    new
                    {
                        StatusCode=200,
                        Message="Team Deleted Successfully"
                    });

            }
        }
    }
}
