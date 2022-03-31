import { Component, OnInit } from '@angular/core';
import { BookeventService } from '../bookevent.service';
import {AuthenticationService} from 'src/app/auth/authentication.service';
import { ThisReceiver } from '@angular/compiler';



@Component({
  selector: 'app-viewbooked-event',
  templateUrl: './viewbooked-event.component.html',
  styles: [
  ]
})
export class ViewbookedEventComponent implements OnInit {
  bookLists:any=[];
  bookList:any[]=[];
  detail:any=[];
  temp!:any;
  email=this.auth.email;
  constructor(private service:BookeventService,private auth:AuthenticationService) { 
    this.getdetails();
    let booking:any[];
    // let email=this.auth.email;
  }

  ngOnInit(): void {
  }
  

  getdetails(){
    this.service.getbooking(this.email).subscribe(data=>{
      this.bookList=data;
      // console.log(this.bookLists);
    })
  }
  
  delete(index:number)
  {
    let temp=this.bookList[index].bookingId

    this.service.deleteBooking(temp).subscribe(x=>{
      console.log(x);
    })
    this.service.getbooking(this.email);
  }
  edit(index:number)
  {
    this.service.editBody=this.bookList[index];
  }


}