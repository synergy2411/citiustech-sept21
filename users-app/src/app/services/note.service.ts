import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = "http://localhost:3000/notes";
  // private notes : Note[] = [];

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]>{
    return this.http.get<Note[]>(this.baseUrl)
  }

  getSingleNote(id){
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  deleteNote(id){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  createNote(note){
    return this.http.post(this.baseUrl, note)
  }

  updateNote(id, body){
    return this.http.patch(`${this.baseUrl}/${id}`, {body})
  }

}
