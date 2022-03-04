using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class EventModel
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public string ApplicationName { get; set; }
        public string ApplicationAddress { get; set; }
        public string ApplicantMobile { get; set; }
        public string ApplicantEmail { get; set; }
        public string EventAddress { get; set; }
        public DateTime? EventFromDate { get; set; }
        public DateTime? EventToDate { get; set; }
        public int? AddonId { get; set; }
    }
}
