import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = "https://jsonplaceholder.typicode.com/"

  constructor(private http : HttpClient) { }

  getAllPost(): Observable<Array<Post>>{
    return this.http.get<Post[]>(this.BASE_URL+'posts')
  }

  createPost(post : Post) : Observable<Post>{
    return this.http.post<Post>(this.BASE_URL+'posts', post)
  }
}
