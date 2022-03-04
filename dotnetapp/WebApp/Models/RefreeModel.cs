using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class RefreeModel
    {
        public int RefreeId { get; set; }
        public string RefereeName { get; set; }
        public int? NoOfMatches { get; set; }
        public string ImgUrl { get; set; }
    }
}
