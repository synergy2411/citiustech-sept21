import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { USER_DATA } from '../../model/mocks';

@Component({
  selector : 'app-users',
  templateUrl : './users.component.html'
})
export class UsersComponent implements OnInit{

  user : User;

  constructor(){
    // this.user = USER_DATA;
  }

  ngOnInit(){
    this.user = USER_DATA;
  }

  onMoreInfo(evt : User){
    alert(`Mr. ${evt.lastName} is working with ${evt.company}!`)
    console.log(evt);
  }

  onChange(event : any){
    console.log(event)
  }

}
