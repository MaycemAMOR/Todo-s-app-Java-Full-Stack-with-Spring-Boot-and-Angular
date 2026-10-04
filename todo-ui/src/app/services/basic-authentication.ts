import {Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs';
import {API_URL, AUTHENTICATED_USER, TOKEN} from '../app.constants';

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
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return user !== null;
  }

  public getAuthenticatedUser(): string | null {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  public getAuthenticatedToken(): string | null {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  public authenticate(username: string, password: string): boolean {
    if (this.authentication(username, password)) {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      this.isUserLoggedIn.set(true); // 👈 On informe Angular du changement d'état !
      return true;
    }
    return false;
  }

  public executeBasicAuthenticationService(username: string, password: string) {
    let basicAuthenticationHeaderString = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicAuthenticationHeaderString
    });
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,
      {headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthenticationHeaderString);

          this.isUserLoggedIn.set(true); // 👈 On informe Angular du changement d'état !
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service")
  }

  public executeJwtAuthenticationService(username: string, password: string) {

    return this.http.post<any>(`${API_URL}/authenticate`, {username, password}).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          this.isUserLoggedIn.set(true); // 👈 On informe Angular du changement d'état !
          return data;
        }
      )
    );
    //console.log("Execute Hello World Bean Service")
  }


  public authentication(username: string, password: string): boolean {
    return username === "Mytech" && password === '06864321';
  }

  logout(): void {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
    this.isUserLoggedIn.set(false); // 👈 Met à jour l'état lors de la déconnexion
  }
}
