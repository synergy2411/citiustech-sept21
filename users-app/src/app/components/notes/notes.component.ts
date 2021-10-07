import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes()
      .subscribe(notes => console.log("[Notes] ", notes));

    this.noteService.getSingleNote(1)
      .subscribe(result => console.log("[Note]", result));

    this.noteService.deleteNote(3)
    .subscribe(result => console.log("[DELETE]", result));

    this.noteService.createNote({label : "Insurance", body : "renew car insurance"})
      .subscribe(console.log)

    this.noteService.updateNote(1, "New body added")
      .subscribe(console.log)
  }

}
