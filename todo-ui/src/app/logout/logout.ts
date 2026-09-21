import {Component, OnInit} from '@angular/core';
import {HardcodedAuthentication} from '../services/hardcoded-authentication';

@Component({
  imports: [],
  selector: 'app-logout',
  styleUrl: './logout.css',
  templateUrl: './logout.html',
  standalone: true
})
export class Logout implements OnInit {
  constructor(
    private hardcodedAuthenticate: HardcodedAuthentication
  ) {
  }

  ngOnInit(): void {
    this.hardcodedAuthenticate.logout();
  }
}
