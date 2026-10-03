import {Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

class AuthenticationBean {
  constructor(public message: String) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthentication {
  // Signal réactif initialisé selon la présence de l'utilisateur en cache
  // Reactive signal initialized based on the presence of the cached user
  public isUserLoggedIn = signal<boolean>(this.checkUserLoggedIn());

  constructor(
    private http: HttpClient
  ) {
  }

  private checkUserLoggedIn(): boolean {
    const user = sessionStorage.getItem('authenticateUser');
    return user !== null;
  }

  authenticate(username: string, password: string): boolean {
    if (this.authentication(username, password)) {
      sessionStorage.setItem('authenticateUser', username);
      this.isUserLoggedIn.set(true); // 👈 On informe Angular du changement d'état !
      return true;
    }
    return false;
  }

  executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeaderString
    });
    return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth',
      {headers});
    //console.log("Execute Hello World Bean Service")
  }


  public authentication(username: string, password: string): boolean {
    return username === "Mytech" && password === '06864321';
  }

  logout(): void {
    sessionStorage.removeItem('authenticateUser');
    this.isUserLoggedIn.set(false); // 👈 Met à jour l'état lors de la déconnexion
  }
}
