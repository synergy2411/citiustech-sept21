import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:3000/users";

  constructor(private http : HttpClient) { }

  onRegister(username : string, password : string){
    let hashedPassword;
    try{
    hashedPassword = bcrypt.hashSync(password, 12);
    }catch(err){
      console.log(err)
    }
    this.http.post(this.baseUrl,{username, password : hashedPassword})
      .subscribe({
        next : response => {console.log("[RESPONSE]", response)},
        error : err => {console.log(err); throw err}
      })
  }

  onLogin(username : string, password : string){
    console.log(username, password)
    this.http.get(this.baseUrl)
    .subscribe((users: Array<{username : string, password : string, id? : number}>) => {
      for(let user of users){
        if(user.username === username){
          if(bcrypt.compareSync(password, user.password)){
            alert('AUTHENTICATED')
          }else{
            alert('NOT AUTHENTICATED')
          }
        }
      }
    },
    err => console.log(err))
  }

}
