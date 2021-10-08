import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const clonedReq = req.clone({
      params : new HttpParams().set("auth", "token"),
      headers : new HttpHeaders().set('Content-Type', "application/json")
    })
    console.log("REQUEST INTERCEPTOR WORKS", clonedReq);

    return next.handle(clonedReq)

  }

}
