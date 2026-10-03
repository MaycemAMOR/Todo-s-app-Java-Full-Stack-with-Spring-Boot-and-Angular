import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

class HelloBean {
  constructor(public message: String) {
  }
}

@Injectable({
  providedIn: 'root'
})


export class WelcomeData {
  constructor(
    private http: HttpClient
  ) {
  }

  executeHelloWorldBeanService() {
    return this.http.get<HelloBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldPathVariableService(name: string) {
    let basicAuthenticationHeaderString = this.createBasicAuthenticateHttpHeader();
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeaderString
    });
    return this.http.get<HelloBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      {headers});
    //console.log("Execute Hello World Bean Service")
  }

  createBasicAuthenticateHttpHeader(): string {
    let username = 'user';
    let password = 'password';
    return 'Basic ' + window.btoa(username + ':' + password)
  }
}
