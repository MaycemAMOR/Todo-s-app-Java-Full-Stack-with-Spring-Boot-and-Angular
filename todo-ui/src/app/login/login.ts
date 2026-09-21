import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {HardcodedAuthentication} from '../services/hardcoded-authentication';

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
    private router: Router,
    private aut:HardcodedAuthentication
  ) {
  }

  handleLogin() {
      this.invalidLogin = !this.aut.authenticate(this.username,this.password);
      if(!this.invalidLogin){
        this.router.navigate(['welcome',this.username])
      }
      console.log(this.invalidLogin);
  }
}
