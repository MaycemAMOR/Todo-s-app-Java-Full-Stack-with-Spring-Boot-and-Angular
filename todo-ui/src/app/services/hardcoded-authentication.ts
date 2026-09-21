import {Service} from '@angular/core';

@Service()
export class HardcodedAuthentication {

  authenticate(username: string, password: string) {
    return username == "in28minutes" && password == 'dummy';
  }
}

