import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  user : User = {
    email : "test@test.com",age : 34
  }

  constructor() { }

  ngOnInit(): void {
  }

}
