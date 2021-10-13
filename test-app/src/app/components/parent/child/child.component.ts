import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  userEmail : string = '';
  userAge : number = 0;

  @Input() set user(user : User){
    this.userEmail = user.email;
    this.userAge = user.age;
  };

  @Output() childEvent = new EventEmitter<User>()

  saveUser(){
    let user : User = {email : "new@email.com", age : 34}
    this.childEvent.emit(user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
