/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewbooked-event',
  templateUrl: './viewbooked-event.component.html',
  styleUrls: ['./viewbooked-event.component.css']
})
export class ViewbookedEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { BookeventService } from '../bookevent.service';

@Component({
  selector: 'app-viewbooked-event',
  templateUrl: './viewbooked-event.component.html',
  styles: [
  ]
})
export class ViewbookedEventComponent implements OnInit {
  bookList:any=[];
  temp!:any;
  constructor(private service:BookeventService) { 
    this.getdetails();
  }

  ngOnInit(): void {
  }
  getdetails(){
    this.service.getbooking().subscribe(data=>{
      this.bookList=data;
    })
  }
  delete(index:number)
  {
    let temp=this.bookList[index].bookingId

this.service.deleteBooking(temp).subscribe(x=>{
  console.log(x);
})
this.service.getbooking();
  }
  edit(index:number)
  {
    this.service.editBody=this.bookList[index];
  }


}
