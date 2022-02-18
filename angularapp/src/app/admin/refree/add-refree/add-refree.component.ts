
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {RefereeModel} from '../referee.model';
import { RefreeService } from '../refree.service';
@Component({
  selector: 'app-add-refree',
  templateUrl: './add-refree.component.html',
  styles: [
  ]
})
export class AddRefreeComponent implements OnInit {
  AddForm!:FormGroup
  constructor(private service:RefreeService,private route:Router) { }

  ngOnInit(): void {
    this.AddForm=new FormGroup(
      {
        _refreeId:new FormControl(null,Validators.required),
        _refreeName: new FormControl(null,Validators.required),
        _noOfMatches: new FormControl(null,Validators.required)
      }
    )
  }
  addRefree(){
    const body: RefereeModel={
      refreeId:this.AddForm?.get('_refreeId')?.value,
      refereeName:this.AddForm?.get('_refreeName')?.value,
      noOfMatches:this.AddForm?.get('_noOfMatches')?.value
    }
    this.service.addRefree(body).subscribe(x=>{
      console.log(body);
      console.log(x);
      setTimeout(()=>{
        this.route.navigate(["admin/refree"]);
      },100)
    });

  }

}
