import {Component, OnInit} from '@angular/core';
import {BasicAuthentication} from '../services/basic-authentication';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
  standalone: true
})
export class Logout implements OnInit {
  constructor(
    // private hardcodedAuthenticate: HardcodedAuthentication
    private basicAuth: BasicAuthentication
  ) {
  }

  ngOnInit(): void {
    // this.hardcodedAuthenticate.logout();
    this.basicAuth.logout();
  }
}
