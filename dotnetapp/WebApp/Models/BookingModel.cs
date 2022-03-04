using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class BookingModel
    {
        public int BookingId { get; set; }
        public string EventName { get; set; }
        public string ApplicantName { get; set; }
        public string ApplicantAddress { get; set; }
        public string ApplicantMobileNo { get; set; }
        public string ApplicantEmail { get; set; }
        public string EventTime { get; set; }
        public DateTime? EventFromDate { get; set; }
        public int? NoOfPeople { get; set; }
    }
}
