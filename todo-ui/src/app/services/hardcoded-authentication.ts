import {Service} from '@angular/core';

@Service()
export class HardcodedAuthentication {

  authenticate(username: string, password: string) {
    console.log('isUserLoggedIn  before: ' + this.isUserLoggedIn());
    console.log('this.authentication(username, password)  before: ' + this.authentication(username, password));
    if (this.authentication(username, password)) {
      sessionStorage.setItem('authenticateUser', username);
      console.log('isUserLoggedIn  after: ' + this.isUserLoggedIn());
    }
    return this.authentication(username, password);
  }

  public authentication(username: string, password: string) {
    return username == "in28minutes" && password == 'dummy';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    console.log('user : ' + user);
    return !(user === null)
  }
}

