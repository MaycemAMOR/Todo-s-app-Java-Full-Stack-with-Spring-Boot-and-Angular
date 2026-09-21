import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentication {
  // Signal réactif initialisé selon la présence de l'utilisateur en cache
  // Reactive signal initialized based on the presence of the cached user
  public isUserLoggedIn = signal<boolean>(this.checkUserLoggedIn());

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

  public authentication(username: string, password: string): boolean {
    return username === "in28minutes" && password === 'dummy';
  }

  logout(): void {
    sessionStorage.removeItem('authenticateUser');
    this.isUserLoggedIn.set(false); // 👈 Met à jour l'état lors de la déconnexion
  }
}
