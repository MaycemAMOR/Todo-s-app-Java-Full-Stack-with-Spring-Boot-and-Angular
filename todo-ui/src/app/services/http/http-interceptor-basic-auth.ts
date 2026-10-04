import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {BasicAuthentication} from '../basic-authentication';

@Injectable({
  providedIn: 'root'
})

export class HttpInterceptorBasicAuth implements HttpInterceptor {

  constructor(
    private basicAuth: BasicAuthentication,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username = 'user';
    // let password = 'password';
    // let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthenticationHeaderString: string | null = this.basicAuth.getAuthenticatedToken();
    let username: string | null = this.basicAuth.getAuthenticatedUser();

    if (basicAuthenticationHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthenticationHeaderString
        }
      });
    }
    return next.handle(request);
  }
}
