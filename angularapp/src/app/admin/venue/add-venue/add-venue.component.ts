import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueModel } from 'src/app/shared/venue.model';
import { VenueserviceService } from '../venueservice.service';

@Component({
    selector: 'app-add-venue',
    templateUrl: './add-venue.component.html',
    styles: [
    ]
})
export class AddVenueComponent implements OnInit {
    AddForm!: FormGroup;

    constructor(private service: VenueserviceService, private route: Router, private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.AddForm=new FormGroup(
            {
                _VenueId: new FormControl(null,Validators.required),
      _VenueName:new FormControl(null,Validators.required),
      _VenueImageUrl:new FormControl(null,Validators.required),
      _VenueDescription:new FormControl(null,Validators.required),
      _VenueLocation: new FormControl(null,Validators.required)
            }
        );

        
    }
    addVenue() {
        const body: VenueModel = {
            venueId: this.AddForm?.get('_VenueId')?.value,
            venueName: this.AddForm?.get('_VenueLocation')?.value,
            venueImageUrl: this.AddForm?.get('_VenueImageUrl')?.value,
            venueDescription: this.AddForm?.get('_VenueDescription')?.value,
            venueLocation: this.AddForm?.get('_VenueLocation')?.value,
        }
        let params = this.AddForm.get('_VenueId')?.value
        this.service.addVenue(body).subscribe(x => {

            console.log(body);
            setTimeout(() => {
                this.route.navigate(["admin/view"]);
            }, 1000);
        });
    }
}