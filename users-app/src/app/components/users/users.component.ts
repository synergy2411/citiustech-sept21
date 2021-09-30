import { Component } from '@angular/core';


@Component({
  selector : 'app-users',
  templateUrl : './users.component.html'
})
export class UsersComponent{

  user = {
    firstName : "bill",
    lastName : "gates",
    company : "Microsoft",
    income : 50000,
    isWorking : true,
    dob : new Date("Dec 23, 1965"),
    image : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(evt : any){
    alert(`Mr. ${evt.lastName} is working with ${evt.company}!`)
    console.log(evt);
  }

  onChange(event : any){
    console.log(event)
  }

}
