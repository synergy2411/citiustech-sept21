import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  static subject = new Subject();

  constructor() { }
  handleError(error: HttpErrorResponse): void {
    console.log("Global Error Handler works")
    switch (error.status) {
      case 401:
      case 402:
      case 403:
      case 404:
        GlobalErrorHandlerService.subject.next(error.statusText)
        break;

      default:
        GlobalErrorHandlerService.subject.next("Something else happened")
        break;
    }
  }
}
