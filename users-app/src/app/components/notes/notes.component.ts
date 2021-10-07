import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  noteCollection : Note[] = [];
  showNewNote:  boolean = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes()
  }

  getNotes(){
    this.noteService.getAllNotes()
      .subscribe((notes : Note[]) => {
        this.noteCollection = notes
        console.log(notes)
      });
  }

  onAddNewItem(flag : boolean){
    if(flag){
      this.showNewNote = false;
      this.getNotes()
    }
  }

}
