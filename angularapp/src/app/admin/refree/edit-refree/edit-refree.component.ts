/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-refree',
  templateUrl: './edit-refree.component.html',
  styleUrls: ['./edit-refree.component.css']
})
export class EditRefreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RefereeModel } from '../referee.model';
import { RefreeService } from '../refree.service';

@Component({
  selector: 'app-edit-refree',
  templateUrl: './edit-refree.component.html',
  styleUrls: ['./edit-refree.component.css']
})
export class EditRefreeComponent implements OnInit {
  EditForm!:FormGroup
  editvalue!:RefereeModel;
  constructor(private service:RefreeService, private route:Router) { }

  ngOnInit(): void {
this.editvalue=this.service.editrefree;
    this.EditForm=new FormGroup(
      {
        _refreeId:new FormControl(this.editvalue.refreeId,Validators.required),
        _refreeName: new FormControl(this.editvalue.refereeName,Validators.required),
        _noOfMatches: new FormControl(this.editvalue.noOfMatches,Validators.required)
      }
    )
  }
  editRefree()
  {
    const body: RefereeModel={
      refreeId:this.EditForm?.get('_refreeId')?.value,
      refereeName:this.EditForm?.get('_refreeName')?.value,
      noOfMatches:this.EditForm?.get('_noOfMatches')?.value
    }
    let params=this.editvalue.refreeId
    this.service.updateReferee(params,body).subscribe(x=>{
      console.log(body);
      console.log(x);
      setTimeout(()=>{
        this.route.navigate(["admin/refree"]);
      },200)
    });

  }
  

}