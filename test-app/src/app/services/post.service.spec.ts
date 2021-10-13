import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostService } from './post.service';
import { Post } from '../model/post';

describe('PostService', () => {

  let service: PostService;
  let httpTestCtrl : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:    [HttpClientTestingModule]
    });
    service = TestBed.inject(PostService);
    httpTestCtrl = TestBed.inject(HttpTestingController)
  });

  afterEach(()=>{
    httpTestCtrl.verify();
  })

  it("Should create /POST for given URL", () =>{
    const post : Post = {id : 100, body : "My Body", title : "My Title", userId : 199};
    service.createPost(post).subscribe(response => {
      expect(post).toEqual(response)
    })
    const req = httpTestCtrl.expectOne(service.BASE_URL+'posts')
    req.flush(post)
  })


  it("Should be able to make /GET call and return post data", () =>{
    const POSTS : Post[] = [
      { id : 101, body : "the body", title : "The title", userId : 201},
      { id : 102, body : "the body", title : "The title", userId : 201},
      { id : 103, body : "the body", title : "The title", userId : 201},
    ]
    service.getAllPost().subscribe((response: Post[]) => {
      expect(POSTS).toEqual(response)
    })
    const req = httpTestCtrl.expectOne(service.BASE_URL+'posts')
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toBe('json')
    req.flush(POSTS);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
