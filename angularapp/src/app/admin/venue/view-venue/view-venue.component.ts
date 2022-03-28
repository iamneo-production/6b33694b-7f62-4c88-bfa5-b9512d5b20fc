import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueModel } from 'src/app/shared/venue.model';
import { VenueserviceService } from '../venueservice.service';

@Component({
  selector: 'app-view-venue',
  templateUrl: './view-venue.component.html',
  styles: [
  ]
})
export class ViewVenueComponent implements OnInit {

  venues!: any[];
  Venues!: VenueModel[];
  venueIdd!: number
  searchString: string='';
  constructor(private service: VenueserviceService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetails();

  }
  // get all the details from the service 
  getDetails() {
    this.service.getVenue().subscribe(data => {
      this.venues = data;
      this.Venues = data;

    })
  }
  ToUpdate(index: number) {
    this.service.editVenue = this.Venues[index];

    this.route.navigate(['admin/edit'])
  }
  delete(index: number) {
    this.service.deleteVenueId = this.Venues[index];
    this.venueIdd = index;
  }
  deletethis() {
    let params = this.venueIdd;
    console.log(params);
    this.service.deleteVenue(params).subscribe(x => {

      console.log(x);

    });
    setTimeout(() => {
      this.route.navigate(["admin/view"]);
    }, 100);
  }

}
