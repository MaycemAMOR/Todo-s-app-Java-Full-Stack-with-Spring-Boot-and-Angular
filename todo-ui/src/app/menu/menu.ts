import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  imports: [
    RouterLink
  ],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
  standalone: true
})
export class Menu {}
