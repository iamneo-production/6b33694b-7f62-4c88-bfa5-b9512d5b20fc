import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/shared/bookingdetails.model';
import { BookeventService } from '../bookevent.service';

@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styles: [
  ]
})
export class BookeventComponent implements OnInit {
bookevent!:FormGroup;
  constructor(private route:Router, private service:BookeventService) { }

  ngOnInit(): void {
    this.bookevent =new FormGroup({
      eventName: new FormControl(null,Validators.required),
      applicantName: new FormControl(null,Validators.required),
      applicantMobileNo: new FormControl(null,Validators.required),
      applicantEmailId: new FormControl(null,Validators.required),
      applicantAddress: new FormControl(null,Validators.required),
      eventAddress: new FormControl(null,Validators.required),
      eventTime: new FormControl(null,Validators.required),
      eventDate: new FormControl(null,Validators.required),
      noOfPeople: new FormControl(null,Validators.required),
    })
  }
  bookEvent(){
  const body: BookingDetails={
    bookingId:this.generateRandomNumber(),
    eventName:this.bookevent?.get('eventName')?.value,
    applicantName:this.bookevent?.get('applicantName')?.value,
    applicantAddress:this.bookevent?.get('applicantAddress')?.value,
    applicantMobileNo:this.bookevent?.get('applicantMobileNo')?.value,
    applicantEmail:this.bookevent?.get('applicantEmailId')?.value,
    eventAddress:this.bookevent?.get('eventAddress')?.value,
    eventFromDate:this.bookevent?.get('eventDate')?.value,
    eventTime:this.bookevent?.get('eventTime')?.value,
    noOfPeople:this.bookevent?.get('noOfPeople')?.value,
  }
  this.service.addBooking(body).subscribe(x=>{
    console.log(body);
    console.log(x);
    setTimeout(()=>{
      this.route.navigate(["user/homepage"]);
    },100)
  });
 
}
generateRandomNumber(): number {
  var minm = 100000;
  var maxm = 999999;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
  
 }
  

