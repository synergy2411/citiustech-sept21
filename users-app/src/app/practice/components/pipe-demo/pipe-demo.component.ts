import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  promise = new Promise((resolve, reject) => {
    // XHR Call - GET -> 1-5Seconds
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 4000);
  })

  contactNumber = 987654321;

  constructor() { }

  ngOnInit(): void {
  }

}
