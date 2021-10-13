import { Component, OnInit } from '@angular/core';
import { AsyncService } from 'src/app/services/async.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor(private asyncService :AsyncService) { }

  needsLogin : boolean = true;

  ngOnInit(): void {
    this.asyncService.getPromise().then(flag => {
      console.log(flag)
      flag ? this.needsLogin = false : this.needsLogin = true
    })
  }

}
