import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, of, interval, range, fromEvent,  } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-obs-operators-demo',
  templateUrl: './obs-operators-demo.component.html',
  styleUrls: ['./obs-operators-demo.component.css']
})
export class ObsOperatorsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild("btn") btn : ElementRef<HTMLButtonElement>;

  constructor() { }

  ngAfterViewInit(){
    fromEvent(this.btn.nativeElement, 'click').subscribe(response => {
      ajax.getJSON('https://api.github.com/users')
      .subscribe(console.log)
    })
  }

  ngOnInit(): void {

    // AJAX Calls
    // ajax.getJSON('https://api.github.com/users')
    //   .subscribe(console.log)

    // fromEvent
    // fromEvent(document, 'click').subscribe(console.log)

    // range
    // range(1,5).subscribe(console.log)

    // interval
    // interval(1000).subscribe(console.log)

    // of
    // const source = of("Apple", "Banana", "Orange")
    // source.subscribe(console.log)


  // From
  // const arr = [1,2,3,4,5]
  // const source = from(arr)
  //   source.subscribe(console.log);
    // source.subscribe(response => console.log(response));

  }

}
