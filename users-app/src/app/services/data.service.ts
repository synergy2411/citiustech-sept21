import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn : 'root'
})
export class DataService{

  counter = 0;

  constructor(private httpClient : HttpClient){}

  getUserdata() : Observable<Array<User>>{
    return this.httpClient.get<{userdata : Array<User>}>('./assets/date/user-data.json')
      .pipe(
        tap(val => console.log("TAP ", val)),
        map(response => <User[]> response.userdata),
        catchError(err => {
          console.log("Error caught in Service ", err);
          // Error handler code
          return throwError(err)
        })
      )

  }


}
