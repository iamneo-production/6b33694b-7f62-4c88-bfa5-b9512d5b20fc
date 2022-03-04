using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace Baseball.Model
{
    public partial class baseball_tContext : DbContext
    {
        public baseball_tContext()
        {
        }

        public baseball_tContext(DbContextOptions<baseball_tContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AdminModel> AdminModels { get; set; }
        public virtual DbSet<BookingModel> BookingModels { get; set; }
        public virtual DbSet<EventModel> EventModels { get; set; }
        public virtual DbSet<LoginModel> LoginModels { get; set; }
        public virtual DbSet<RefreeModel> RefreeModels { get; set; }
        public virtual DbSet<TeamModel> TeamModels { get; set; }
        public virtual DbSet<UserModel> UserModels { get; set; }
        public virtual DbSet<VenueModel> VenueModels { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=DESKTOP-LS5R3C6\\SQLEXPRESS;Database=baseball_t;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<AdminModel>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__AdminMod__AB6E616546B54FBF");

                entity.ToTable("AdminModel");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .HasColumnName("email");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(20)
                    .HasColumnName("mobileNumber");

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");

                entity.Property(e => e.UserRole)
                    .HasMaxLength(20)
                    .HasColumnName("userRole");
            });

            modelBuilder.Entity<BookingModel>(entity =>
            {
                entity.HasKey(e => e.BookingId)
                    .HasName("PK__BookingM__C6D03BCD547668CE");

                entity.ToTable("BookingModel");

                entity.Property(e => e.BookingId)
                    .ValueGeneratedNever()
                    .HasColumnName("bookingId");

                entity.Property(e => e.ApplicantAddress)
                    .HasColumnType("text")
                    .HasColumnName("applicantAddress");

                entity.Property(e => e.ApplicantEmail)
                    .HasMaxLength(50)
                    .HasColumnName("applicantEmail");

                entity.Property(e => e.ApplicantMobileNo)
                    .HasMaxLength(20)
                    .HasColumnName("applicantMobileNo");

                entity.Property(e => e.ApplicantName)
                    .HasMaxLength(20)
                    .HasColumnName("applicantName");

                entity.Property(e => e.EventFromDate)
                    .HasColumnType("date")
                    .HasColumnName("eventFromDate");

                entity.Property(e => e.EventName)
                    .HasMaxLength(20)
                    .HasColumnName("eventName");

                entity.Property(e => e.EventTime)
                    .HasMaxLength(20)
                    .HasColumnName("eventTime");

                entity.Property(e => e.NoOfPeople).HasColumnName("noOfPeople");
            });

            modelBuilder.Entity<EventModel>(entity =>
            {
                entity.HasKey(e => e.EventId)
                    .HasName("PK__EventMod__2DC7BD09CEECCAFA");

                entity.ToTable("EventModel");

                entity.Property(e => e.EventId)
                    .ValueGeneratedNever()
                    .HasColumnName("eventId");

                entity.Property(e => e.AddonId).HasColumnName("addonId");

                entity.Property(e => e.ApplicantEmail)
                    .HasMaxLength(20)
                    .HasColumnName("applicantEmail");

                entity.Property(e => e.ApplicantMobile)
                    .HasMaxLength(20)
                    .HasColumnName("applicantMobile");

                entity.Property(e => e.ApplicationAddress).HasMaxLength(20);

                entity.Property(e => e.ApplicationName)
                    .HasMaxLength(20)
                    .HasColumnName("applicationName");

                entity.Property(e => e.EventAddress)
                    .HasMaxLength(20)
                    .HasColumnName("eventAddress");

                entity.Property(e => e.EventFromDate)
                    .HasColumnType("date")
                    .HasColumnName("eventFromDate");

                entity.Property(e => e.EventName)
                    .HasMaxLength(20)
                    .HasColumnName("eventName");

                entity.Property(e => e.EventToDate).HasColumnType("date");
            });

            modelBuilder.Entity<LoginModel>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__LoginMod__AB6E6165A4F18C0D");

                entity.ToTable("LoginModel");

                entity.Property(e => e.Email)
                    .HasMaxLength(20)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");
            });

            modelBuilder.Entity<RefreeModel>(entity =>
            {
                entity.HasKey(e => e.RefreeId)
                    .HasName("PK__RefreeMo__32CF4B6EC6B7C031");

                entity.ToTable("RefreeModel");

                entity.Property(e => e.RefreeId)
                    .ValueGeneratedNever()
                    .HasColumnName("refreeID");

                entity.Property(e => e.ImgUrl)
                    .HasColumnType("text")
                    .HasColumnName("imgUrl");

                entity.Property(e => e.NoOfMatches).HasColumnName("noOfMatches");

                entity.Property(e => e.RefereeName)
                    .HasMaxLength(20)
                    .HasColumnName("refereeName");
            });

            modelBuilder.Entity<TeamModel>(entity =>
            {
                entity.HasKey(e => e.TeamId)
                    .HasName("PK__TeamMode__5ED7536AF3265BC6");

                entity.ToTable("TeamModel");

                entity.Property(e => e.TeamId)
                    .ValueGeneratedNever()
                    .HasColumnName("teamId");

                entity.Property(e => e.ImageUrl)
                    .HasColumnType("text")
                    .HasColumnName("imageUrl");

                entity.Property(e => e.Location)
                    .HasMaxLength(20)
                    .HasColumnName("location");

                entity.Property(e => e.NoOfPlayers).HasColumnName("noOfPlayers");

                entity.Property(e => e.TeamDescription)
                    .HasColumnType("text")
                    .HasColumnName("teamDescription");

                entity.Property(e => e.TeamName)
                    .HasMaxLength(20)
                    .HasColumnName("teamName");
            });

            modelBuilder.Entity<UserModel>(entity =>
            {
                entity.HasKey(e => e.Email)
                    .HasName("PK__UserMode__AB6E6165067953AD");

                entity.ToTable("UserModel");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.MobileNumber)
                    .HasMaxLength(20)
                    .HasColumnName("mobileNumber");

                entity.Property(e => e.Password)
                    .HasMaxLength(20)
                    .HasColumnName("password");

                entity.Property(e => e.UserRole)
                    .HasMaxLength(20)
                    .HasColumnName("userRole");

                entity.Property(e => e.Username)
                    .HasMaxLength(30)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<VenueModel>(entity =>
            {
                entity.HasKey(e => e.VenueId)
                    .HasName("PK__VenueMod__4DDFB6FFB8B85393");

                entity.ToTable("VenueModel");

                entity.Property(e => e.VenueId)
                    .ValueGeneratedNever()
                    .HasColumnName("venueId");

                entity.Property(e => e.VenueDescription)
                    .HasMaxLength(20)
                    .HasColumnName("venueDescription");

                entity.Property(e => e.VenueImageUrl)
                    .HasColumnType("text")
                    .HasColumnName("venueImageURL");

                entity.Property(e => e.VenueLocation).HasMaxLength(20);

                entity.Property(e => e.VenueName)
                    .HasMaxLength(20)
                    .HasColumnName("venueName");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
