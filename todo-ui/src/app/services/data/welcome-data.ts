import {Injectable, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
  executeHelloWorldPathVariableService(name:string) {
    return this.http.get<HelloBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("Execute Hello World Bean Service")
  }
}
