using System;
using System.Collections.Generic;

#nullable disable

namespace Baseball.Model
{
    public partial class UserModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Username { get; set; }
        public string MobileNumber { get; set; }
        public string UserRole { get; set; }
    }
}
