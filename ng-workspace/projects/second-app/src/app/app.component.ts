import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'second-app';
  snippets = `<script>Template : javascript:alert('Hello from XSS')</script>`;
  url = "javascript:alert('Hello from URL')";
  safeUrl;
  notesCollection = [
    {id : 1, label : "Grocery"},
    {id : 2, label : "Shopping"},
    {id : 3, label : "Insurance"},
    {id : 4, label : "Planting"},
  ]

  addItem(){
    // impure
    // this.notesCollection.push({id : this.notesCollection.length+1, label : "New Label"})
    // Pure Change
    this.notesCollection = [
      {id : 1, label : "Grocery"},
      {id : 2, label : "Shopping"},
      {id : 3, label : "Insurance"},
      {id : 4, label : "Planting"},
      {id : this.notesCollection.length, label : "New Item"}
    ]
  }

  trackById(index, el){
    return el.id
  }

  ngOnInit(){
    // this.service.getNotes(notes => {
      // Pure change
    //   this.notesCollection = notes;
    // })
  }

  constructor(
    private sanitizer : DomSanitizer,
    // private service : Service
    ){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }
}
