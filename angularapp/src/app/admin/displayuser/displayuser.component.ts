import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user.model';
import { ServicedService } from './serviced.service';

@Component({
  selector: 'app-displayuser',
  templateUrl: './displayuser.component.html',
  styles: [
  ]
})
export class DisplayuserComponent implements OnInit {
UserList!:UserModel[];
ActivatedEditButton:boolean=false;
depe!:UserModel;

  constructor(private service: ServicedService) { }

  ngOnInit(): void {
    this.getdetails();
  }
edit(item:any){
  // this.dep=item;
  this.ActivatedEditButton=true;
  console.log(item);
}
close()
{
  this.ActivatedEditButton=false;
}
  getdetails(){
    this.service.getUser().subscribe(data=>{
      this.UserList=data;
      
    console.log(data);
    })
  }
  delete(item: number)
  {
    this.depe=this.UserList[item];
    console.log(this.UserList[item]);
    this.service.deleteUser(this.depe.username).subscribe();
    this.UserList.splice(item,1);
    this.service.deleteuser=this.depe;
  }
}
