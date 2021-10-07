import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';
// import { USER_DATA } from '../../model/mocks';

@Component({
  selector : 'app-users',
  templateUrl : './users.component.html',
  styleUrls : ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users : User[];
  tab : number = 1;

  constructor(private dataService : DataService){
    // this.user = USER_DATA;
  }

  errorMessage : HttpErrorResponse | string;
  showAlert : boolean = false;

  ngOnInit(){
    // this.users = USER_DATA;
    // this.users = this.dataService.getUserdata();
    this.dataService.getUserdata()
      .subscribe({
        next : (response : Array<User>) => this.users = response,
        error : (err : HttpErrorResponse) => {
          console.error('Error caught in component : ', err);
          switch (err.status) {
            case 401 :
            case 402 :
            case 403 :
            case 404 :
              this.showAlert = true;
              this.errorMessage = err;
              break;
            default:
              this.errorMessage = "Something else happened"
              break;
          }
        },
        complete : () => console.log("COMPLETED")
      })
  }

  onCloseAlert(flag : boolean){
    if(flag){
      this.showAlert = false;
    }
  }

  onMoreInfo(evt : User){
    alert(`Mr. ${evt.lastName} is working with ${evt.company}!`)
    console.log(evt);
  }

  onChange(event : any){
    console.log(event)
  }

}
