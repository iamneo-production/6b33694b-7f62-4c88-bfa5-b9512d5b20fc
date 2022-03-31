import { Component, OnInit } from '@angular/core';
import { VenueModel } from 'src/app/shared/venue.model';
import { ViewEventService } from './view-event.service';


@Component({
    selector: 'app-view-event',
    templateUrl: './view-event.component.html',
    styles: [
    ]
})
export class ViewEventComponent implements OnInit {
    venues!: VenueModel[];
    searchString: string='';
    constructor(private service: ViewEventService) { }

    ngOnInit(): void {
        this.getDetails();
    }
    getDetails() {
        this.service.getVenue().subscribe(data => {
            this.venues = data;
        })
    }

    // app : angular.module("searchModule",[]).controller("searchController",function getDetails() {
    //     this.service.getVenue().subscribe(data => {
    //         this.venues = data;
    //     })
    // });

}