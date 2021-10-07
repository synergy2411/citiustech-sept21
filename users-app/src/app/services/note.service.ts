import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = "http://localhost:3000/notes";

  constructor(private http: HttpClient) { }

  getAllNotes(){
    return this.http.get(this.baseUrl)
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
