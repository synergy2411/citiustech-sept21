import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-subjects-demo',
  templateUrl: './obs-subjects-demo.component.html',
  styleUrls: ['./obs-subjects-demo.component.css']
})
export class ObsSubjectsDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const sub = new BehaviorSubject(101);
    sub.subscribe(val => console.log("SUB 1 : ", val))

    sub.next(201)

    sub.subscribe(val => console.log("SUB 2 : ", val))


    // const subject = new Subject()

    // subject.subscribe(val => console.log("SUB 1 : ", val))

    // subject.next(190);

    // subject.subscribe(val => console.log("SUB 2 : ", val))

    // subject.next(201);
    // subject.next(321);

  }

}
