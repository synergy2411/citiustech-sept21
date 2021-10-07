import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { USER_DATA } from '../model/mocks';
import { User } from '../model/user';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  counter = 0;

  constructor(private httpClient : HttpClient){}

  getUserdata() : Observable<Array<User>>{
    return this.httpClient.get<{userdata : Array<User>}>('./assets/data/user-data.json')
      .pipe(
        map(response =>{
          console.log("MAP RESPONSE ", response);       // {userdata : [User]} => User[]
          return  <User[]> response['userdata']})
      )

  }


}
