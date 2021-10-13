import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  storeToken(){
    localStorage.setItem("token", "Bearer MyToken")
  }

  checkToken(): boolean{
    return (localStorage.getItem("token") === "Bearer MyToken")
  }
}
