using Microsoft.AspNetCore.Mvc;
using Moq;
using WebApp.Controllers;
using WebApp.Infrastructure;
using WebApp.Models;
using System.Collections.Generic;
using System.Linq;
using Xunit;
 
namespace WebAppTest
{
    public class VenueControllerTest
    {
        [Fact]
        public void Test_GET_AllVenues()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.Venues).Returns(Multiple());
            var controller = new VenueController(mockRepo.Object);
 
            // Act
            var result = controller.Get();
 
            // Assert
            var model = Assert.IsAssignableFrom<IEnumerable<Venue>>(result);
            Assert.Equal(3, model.Count());
        }
 
        private static IEnumerable<Venue> Multiple()
        {
            var r = new List<Venue>();
            r.Add(new Venue()
            {
                venueId = 01,
                venueName = "ABC",
                venueImageURL = "ABC.png",
                venueDescription = "attractive",
                venueCapacity = "20000",
                venueLocation = "USA"
            });
            r.Add(new Venue()
            {
                venueId = 02,
                venueName = "ABC",
                venueImageURL = "ABC.png",
                venueDescription = "attractive",
                venueCapacity = "20000",
                venueLocation = "USA"
            });
            r.Add(new Venue()
            {
                venueId = 03,
                venueName = "ABC",
                venueImageURL = "ABC.png",
                venueDescription = "attractive",
                venueCapacity = "20000",
                venueLocation = "USA"
            });
            return r;
        }

        [Fact]
        public void Test_POST_AddVenue()
        {
            // Arrange
            Venue r = new Venue()
            {
                venueId = 04,
                venueName = "ABC",
                venueImageURL = "ABC.png",
                venueDescription = "attractive",
                venueCapacity = "20000",
                venueLocation = "USA"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.AddVenue(It.IsAny<Venue>())).Returns(r);
            var controller = new VenueController(mockRepo.Object);
        
            // Act
            var result = controller.Post(r);
        
            // Assert
            var venue = Assert.IsType<Venue>(result);
            Assert.Equal(04, venue.venueId);
            Assert.Equal("ABC", venue.venueName);
            Assert.Equal("ABC.png", venue.venueImageURL);
            Assert.Equal("attractive", venue.venueDescription);
            Assert.Equal("20000", venue.venueCapacity);
            Assert.Equal("USA", venue.venueLocation);

        }

        [Fact]
        public void Test_PUT_UpdateVenue()
        {
            // Arrange
            Venue r = new Venue()
            {
                venueId = 01,
                venueName = "new ABC",
                venueImageURL = "ABC.png",
                venueDescription = "attractive",
                venueCapacity = "20000",
                venueLocation = "USA"
            };
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.UpdateVenue(It.IsAny<Venue>())).Returns(r);
            var controller = new VenueController(mockRepo.Object);
        
            // Act
            var result = controller.Put(r);
        
            // Assert
            var venue = Assert.IsType<Venue>(result);
            Assert.Equal(01, venue.venueId);
            Assert.Equal("new ABC", venue.venueName);
            Assert.Equal("ABC.png", venue.venueImageURL);
            Assert.Equal("attractive", venue.venueDescription);
            Assert.Equal("20000", venue.venueCapacity);
            Assert.Equal("USA", venue.venueLocation);
        }

        [Fact]
        public void Test_DELETE_Venue()
        {
            // Arrange
            var mockRepo = new Mock<IRepository>();
            mockRepo.Setup(repo => repo.DeleteVenue(It.IsAny<int>())).Verifiable();
            var controller = new VenueController(mockRepo.Object);
        
            // Act
            controller.Delete(3);
        
            // Assert
            mockRepo.Verify();
        }
    }
}