import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  standalone: true
})
export class Login {

  username = 'in28minutes';
  password = '';
  errorMsg: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor(
    private router: Router
  ) {
  }

  handleLogin() {
    if (this.username == "in28minutes" && this.password == 'dummy') {
      this.router.navigate(['welcome', this.username]);
      console.log(this.invalidLogin);
    } else {
      this.invalidLogin = true;
    }
  }
}
