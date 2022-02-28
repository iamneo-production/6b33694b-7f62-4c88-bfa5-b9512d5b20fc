import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from './team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
// teams!:TeamModel[];
readonly APIUrl = "https://localhost:5001/api/Team/"
  constructor(private http:HttpClient) { }
  getTeams():Observable<TeamModel[]>
  {
    
return this.http.get<TeamModel[]>("https://localhost:5001/api/Team/getTeam")
  }
  edit!:TeamModel;
  editTeam(params:number,body:TeamModel):Observable<TeamModel>
  {
    let URL=this.APIUrl+"editTeam/";
   return  this.http.put<TeamModel>(URL+params,body)
  }
  test(){
    return console.log(this.edit);
  }
  addTeam(body:TeamModel):Observable<TeamModel>{
    let Url=this.APIUrl+'addTeam/';
    return this.http.post<TeamModel>(Url,body);

  }
  delete!:TeamModel;
  deleteTeam(params:number):Observable<TeamModel>{
    let Url=this.APIUrl+"deleteTeam/";
    return this.http.delete<TeamModel>(Url+params);
  }
}
