import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerModel } from '../player.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  PlayerForm!:FormGroup;
  players!:PlayerModel[];
  constructor(private service:TeamsService, private route:Router) {
    this.getdetails();
   }

  ngOnInit(): void {
    this.PlayerForm= new FormGroup(
      {
        _FirstName: new FormControl(null,Validators.required),
        _LastName:new FormControl(null,Validators.required),
        _Age: new FormControl(null,Validators.required),
        _Gender: new FormControl(null,Validators.required),
        _TeamId: new FormControl(null,Validators.required)
      }
    );
    // resetForm(FormGroup);
  }
  addPlayer(){
    // this.players.push(this.PlayerForm.value);
    // console.log(this.players);
    const body:PlayerModel={
      firstName:this.PlayerForm?.get('_FirstName')?.value,
      lastName:this.PlayerForm?.get('_LastName')?.value,
      age:this.PlayerForm?.get('_Age')?.value,
      gender:this.PlayerForm?.get('_Gender')?.value,
      teamId:this.PlayerForm?.get('_TeamId')?.value
    }
    
    this.service.addPlayer(body).subscribe(x=>{
      console.log(body);
      setTimeout(()=>{
        this.route.navigate(['admin/addTeam']);
      })
    })
    
  }
  
  getdetails(){
    let params=this.PlayerForm?.get('_TeamId')?.value;
    this.service.getPlayers(params).subscribe(data=>{
      this.players=data;
    // console.log(data);
      // console.log(this.PlayerList)
    })
  }

  resetForm(form:NgForm){
    if(form!=null){
      form.resetForm();
    } 
  }
}
