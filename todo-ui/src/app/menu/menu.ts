import {Component, OnInit, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BasicAuthentication} from '../services/basic-authentication';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
  standalone: true
})
export class Menu implements OnInit {
  public name = signal<string | null>(null);

  constructor(
    // private hardcodedAuthentication: HardcodedAuthentication,
    protected basicAuth: BasicAuthentication
  ) {
  }

  ngOnInit(): void {
    this.name.set(sessionStorage.getItem('authenticateUser'));
  }
}
