import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user = {
    email : "foo@test.com",
    age : 32
  }

  changeMail(){
    // Impure Change
    this.user.email = "test@test.com"
  }

  changeMailRef(){
    // Pure Change
    this.user = {
      email : "bar@test.com",
      age : 34
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
