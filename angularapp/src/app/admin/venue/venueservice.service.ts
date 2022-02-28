import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VenueModel } from 'src/app/shared/venue.model';

@Injectable({
    providedIn: 'root'
})
export class VenueserviceService {
    readonly APIUrl = "https://localhost:5001/api/Venue/"

    constructor(private http: HttpClient) { }

    getVenue(): Observable<VenueModel[]> {
        return this.http.get<VenueModel[]>('https://localhost:5001/api/Venue/getAllVenue');
    }


    editVenue!: VenueModel;

    //To Update the Venue by sending the Id and the Body of the Model
    updateVenue(params: number, body: VenueModel): Observable<VenueModel> {
        let Url = this.APIUrl + "edit/";

        return this.http.put<VenueModel>(Url + params, body)
        // https://localhost:5001/api/Venue/edit/2
    }
    /*  This is to delete the user */
    deleteVenueId!: VenueModel;
    deleteVenue(params: number): Observable<VenueModel> {
        let Url = this.APIUrl + "deleteVenue/";
        return this.http.delete<VenueModel>(Url + params);

    }

    //To return the editVenue value
    test() {
        return this.editVenue;
    }
    //Method to add Venue to the View
    addVenue(body:VenueModel):Observable<VenueModel>
    {
        return this.http.post<VenueModel>("https://localhost:5001/api/Venue/addVenue",body)

    }

}