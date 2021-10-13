import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {

  constructor() { }

  getPromise() : Promise<boolean>{
    return Promise.resolve(true)
  }
}
