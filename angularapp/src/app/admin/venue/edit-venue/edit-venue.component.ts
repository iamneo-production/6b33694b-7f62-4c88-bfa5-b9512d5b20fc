import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueModel } from 'src/app/shared/venue.model'; 
import { VenueserviceService } from '../venueservice.service';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styles: [
  ]
})
export class EditVenueComponent implements OnInit {
EditForm!:FormGroup

Venue!:VenueModel;
  constructor(private service:VenueserviceService,private route: Router,private  router:ActivatedRoute ) { }

  ngOnInit(): void {
    // this.service.test();
    this.Venue=this.service.editVenue;
    this.EditForm=new FormGroup({
      _VenueId: new FormControl(this.Venue.venueId,Validators.required),
      _VenueName:new FormControl(this.Venue.venueName,Validators.required),
      _VenueImageUrl:new FormControl(this.Venue.venueImageUrl,Validators.required),
      _VenueDescription:new FormControl(this.Venue.venueDescription,Validators.required),
      _VenueLocation: new FormControl(this.Venue.venueLocation,Validators.required)
    });
    console.log(this.Venue);
  }
// GetVenue()
// {
//   this.service.getVenue().subscribe((data)=>{
//     this.Venues=data;
//     this.service.test();
    

//   })
// }

  
  updateVenue()
  {
    const body:VenueModel={
      venueId:this.EditForm?.get('_VenueId')?.value,
      venueName:this.EditForm?.get('_VenueName')?.value,
      venueImageUrl:this.EditForm?.get('_VenueImageUrl')?.value,
      venueDescription:this.EditForm?.get('_VenueDescription')?.value,
      venueLocation:this.EditForm?.get('_VenueLocation')?.value,
    }
    let params=this.EditForm.get('_VenueId')?.value
    this.service.updateVenue(params,body).subscribe(x=>{

      console.log(body);
      setTimeout(() => {
        this.route.navigate(["admin/view"]);
    }, 100);
    });
  }
   back(){
    this.route.navigate(['admin/view']);
  }

}
