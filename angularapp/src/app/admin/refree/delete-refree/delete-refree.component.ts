// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete-refree',
//   templateUrl: './delete-refree.component.html',
//   styleUrls: ['./delete-refree.component.css']
// })
// export class DeleteRefreeComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RefereeModel } from '../referee.model';
import { RefreeService } from '../refree.service';

@Component({
  selector: 'app-delete-refree',
  templateUrl: './delete-refree.component.html',
  styles: [
  ]
})
export class DeleteRefreeComponent implements OnInit {
  DeleteForm!:FormGroup
  deleteId!:any

  constructor(private service:RefreeService, private route:Router) {

   }

  ngOnInit(): void {
    this.deleteId=this.service.deleteref;
    console.log(this.deleteId);
    this.DeleteForm=new FormGroup(
      {
        _refreeId:new FormControl(this.deleteId.refreeId,Validators.required),
        _refreeName: new FormControl(this.deleteId.refereeName,Validators.required),
        _noOfMatches: new FormControl(this.deleteId.noOfMatches,Validators.required)
      }
    )

  }
  deleteRefree()
  {
    let params=this.deleteId.refreeId
    this.service.deleteReferee(params).subscribe(x=>{

      console.log(x);
      setTimeout(()=>{
        this.route.navigate(["admin/refree"]);
      },100)
    });

  }

}