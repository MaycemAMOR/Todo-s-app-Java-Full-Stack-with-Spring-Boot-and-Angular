import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuth implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'user';
    let password = 'password';
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthenticationHeaderString
      }
    });
    return next.handle(request);
  }
}
