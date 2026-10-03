import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {BasicAuthentication} from '../services/basic-authentication';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
  standalone: true
})
export class Login {

  username = 'Mytech';
  password = '';
  errorMsg: string = 'Invalid Credentials';
  invalidLogin: boolean = false;

  constructor(
    private router: Router,
    // public aut:HardcodedAuthentication
    public aut:BasicAuthentication
  ) {
  }

  handleLogin() {
      this.invalidLogin = !this.aut.authenticate(this.username,this.password);
      if(!this.invalidLogin){
        this.router.navigate(['welcome',this.username])
      }
      console.log(this.invalidLogin);
  }

  handleBasicAuthLogin() {
    this.aut.executeBasicAuthenticationService(this.username, this.password).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error: (error) => {
          this.invalidLogin = true;
          console.log(this.invalidLogin);
          console.log(error);
        }
      }
    )

    // this.invalidLogin = !this.aut.authenticate(this.username,this.password);
    // if(!this.invalidLogin){
    //
    // }
    // console.log(this.invalidLogin);
  }
}
