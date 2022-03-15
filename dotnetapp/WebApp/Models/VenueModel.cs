using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class VenueModel
    {
        public int VenueId { get; set; }
        public string VenueName { get; set; }
        public string VenueImageUrl { get; set; }
        public string VenueDescription { get; set; }
        public string VenueLocation { get; set; }
    }
}



