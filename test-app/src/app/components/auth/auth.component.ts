import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  salarySlip : string = '';
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  getSalarySlip(){
    if(this.authService.checkToken()){
      this.salarySlip = "Generate Salary Slip"
    }else{
      this.salarySlip = "Can't Generate Salary Slip"
    }
  }

  isAuthenticated(){
    if(this.authService.checkToken()){
      return "AUHTENTICATED"
    }
    return "NOT AUTHENTICATED"
  }

}
