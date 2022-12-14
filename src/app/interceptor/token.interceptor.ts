import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let currentUser = localStorage.getItem('token');
    if (currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: `${currentUser}`
        }
      });
    }
    return next.handle(request);
  }
}
