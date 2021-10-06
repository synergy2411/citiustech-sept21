import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { from, of, interval, range, fromEvent,  } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { take, map, pluck, filter, reduce, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-obs-operators-demo',
  templateUrl: './obs-operators-demo.component.html',
  styleUrls: ['./obs-operators-demo.component.css']
})
export class ObsOperatorsDemoComponent implements OnInit, AfterViewInit {

  @ViewChild("btn") btn : ElementRef<HTMLButtonElement>;
  searchForm : FormGroup;
  search = new FormControl();

  constructor(private fb : FormBuilder) {
    this.searchForm = this.fb.group({
      search : this.search
    })
   }

  ngAfterViewInit(){
    fromEvent(this.btn.nativeElement, 'click').subscribe(response => {
      ajax.getJSON('https://api.github.com/users')
      .subscribe(console.log)
    })
  }

  ngOnInit(): void {

    this.search.valueChanges.
      pipe(
        takeWhile((value)=>{
          console.log("[TAKE WHILE]", value)
          return !value.includes('foo');
        })
      ).
    subscribe(console.log);

    const users = [
      {email : "test1@test.com", age : 32},
      {email : "test2@test.com", age : 33},
      {email : "test3@test.com", age : 34},
      {email : "test4@test.com", age : 35},
    ]

    const numbers = [2,3,4,5,6];



    // reduce
    // const source = from(numbers)
    // source.pipe(
    //   reduce((acc, curr)=>{
    //     return acc + curr
    //   })
    // ).subscribe(console.log)

    // pluck & filter
    // const source = from(users)
    // source.pipe(
    //   pluck("age"),
    //   filter(age => age > 33)
    // ).subscribe(console.log)


    // interval(1000).pipe(
    //   take(5),
    //   map(val => val*2)
    // ).subscribe(console.log)

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
