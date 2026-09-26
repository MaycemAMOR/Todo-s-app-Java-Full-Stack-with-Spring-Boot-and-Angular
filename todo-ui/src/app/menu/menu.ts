import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
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
export class Menu implements OnInit {
  public name = signal<string | null>(null);

  constructor(
    public hardcodedAuthentication: HardcodedAuthentication,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.name.set(sessionStorage.getItem('authenticateUser'));
  }
}
