import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDetails } from 'src/app/shared/bookingdetails.model';
import { BookeventService } from '../../bookevent.service';

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styles: [
  ]
})
export class EditBookingComponent implements OnInit {
EditForm!:FormGroup;
editValue!:BookingDetails
  constructor(private route:Router,private service:BookeventService) { }
//Get the details when ever I get the details...
  ngOnInit(): void {
    this.editValue=this.service.editBody;
    this.EditForm =new FormGroup({
      eventName: new FormControl(this.editValue.eventName,Validators.required),
      applicantName: new FormControl(this.editValue.applicantName,Validators.required),
      applicantMobileNo: new FormControl(this.editValue.applicantMobileNo,Validators.required),
      applicantEmailId: new FormControl(this.editValue.applicantEmail,Validators.required),
      applicantAddress: new FormControl(this.editValue.applicantAddress,Validators.required),
      eventAddress: new FormControl(this.editValue.eventAddress,Validators.required),
      eventTime: new FormControl(this.editValue.eventTime,Validators.required),
      eventDate: new FormControl(this.editValue.eventFromDate,Validators.required),
      noOfPeople: new FormControl(this.editValue.noOfPeople,Validators.required),
    })
  }

  editBooking(){
    const body: BookingDetails={
      bookingId:this.editValue.bookingId,
      eventName:this.EditForm?.get('eventName')?.value,
      applicantName:this.EditForm?.get('applicantName')?.value,
      applicantAddress:this.EditForm?.get('applicantAddress')?.value,
      applicantMobileNo:this.EditForm?.get('applicantMobileNo')?.value,
      applicantEmail:this.EditForm?.get('applicantEmailId')?.value,
      eventAddress:this.EditForm?.get('eventAddress')?.value,
      eventFromDate:this.EditForm?.get('eventDate')?.value,
      eventTime:this.EditForm?.get('eventTime')?.value,
      noOfPeople:this.EditForm?.get('noOfPeople')?.value,
    }
    let params=this.editValue.bookingId
    this.service.updateBooking(params,body).subscribe(x=>{
      console.log(body);
      console.log(x);
      setTimeout(()=>{
        this.route.navigate(["user/viewbooking"]);
      },100)
    });

  }
}
