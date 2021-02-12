import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req).pipe(
      tap(evt => {
        next.handle(req);
      }),
      catchError((err: any) => {
        if (err.status === 401) this.router.navigate(['login']);
        return next.handle(req);
        // if (err instanceof HttpErrorResponse) {
        //   try {
        //   } catch (e) {
        //   }
        // }
        // return of(err);
      }));;
  }
}