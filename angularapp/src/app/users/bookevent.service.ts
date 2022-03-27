import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetails } from 'src/app/shared/bookingdetails.model';

@Injectable({
  providedIn: 'root'
})
export class BookeventService {
readonly API="https://localhost:5001/api/EventBooking/"
  constructor(private http: HttpClient) { }
  addBooking(body:BookingDetails):Observable<BookingDetails>{
    let Url=this.API+'bookEvent/';
    return this.http.post<BookingDetails>(Url,body);
  }
  getbooking():Observable<BookingDetails[]>{
    let Url=this.API+'booked/'
    return this.http.get<BookingDetails[]>(Url)
  }
  

  deleteBooking(params:number):Observable<BookingDetails>
  {
  let Url=this.API+'deletebooking/';
  return this.http.delete<BookingDetails>(Url+params);
  
}
editBody!:BookingDetails;
  updateBooking(params:number,body:BookingDetails):Observable<BookingDetails>
  {
    let Url=this.API+'editBooked/';
    return this.http.put<BookingDetails>(Url+params,body)
  }

}
