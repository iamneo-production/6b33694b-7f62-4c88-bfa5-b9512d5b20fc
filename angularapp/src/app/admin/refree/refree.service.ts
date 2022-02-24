import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RefereeModel} from './referee.model';

@Injectable({
  providedIn: 'root'
})
export class RefreeService {
readonly ApIUrl="https://localhost:5001/api/Refree/"

  constructor(private http: HttpClient) { }

  //Add the refree
  addRefree(body :RefereeModel):Observable<RefereeModel>
  {
    let URL=this.ApIUrl+'addVenue/'
     return this.http.post<RefereeModel>(URL,body);
  }


  getRefree():Observable<RefereeModel[]>{
    let URL=this.ApIUrl+'getRefree/'
    return this.http.get<RefereeModel[]>(URL)
  }

  //This store the object to be edited
  editrefree!:RefereeModel;
  updateReferee(params:number,body:RefereeModel):Observable<RefereeModel>
  {
    let Url=this.ApIUrl+'edit/';
    return this.http.put<RefereeModel>(Url+params,body)
  }
  deleteref!:RefereeModel;
  deleteReferee(params:number):Observable<RefereeModel>
  {
    let Url=this.ApIUrl+'deleteRefree/';
    return this.http.delete<RefereeModel>(Url+params);

  }
  test()
  {
    return console.log(this.deleteref)
  }

}
