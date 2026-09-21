import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HardcodedAuthentication} from '../services/hardcoded-authentication';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
  standalone: true
})
export class Menu {
  constructor(
    public hardcodedAuthentication: HardcodedAuthentication
  ) {
  }
}
