import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  // template : `
  // <h4>Component Loaded Successfully...</h4>
  // `,
  // styles : [`
  //   h4{
  //     color : tomato;
  //   }
  // `]
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "The Awesome App";
  showComp = true;

  constructor(private userService : UserService){}

  isAuthenticated(){
    return this.userService.isAuthenticated();
  }
}
