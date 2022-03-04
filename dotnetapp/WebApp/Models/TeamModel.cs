using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class TeamModel
    {
        public int TeamId { get; set; }
        public string TeamName { get; set; }
        public string TeamDescription { get; set; }
        public string ImageUrl { get; set; }
        public int? NoOfPlayers { get; set; }
        public string Location { get; set; }
    }
}
