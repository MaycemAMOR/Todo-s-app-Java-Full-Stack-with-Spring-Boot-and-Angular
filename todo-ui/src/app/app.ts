import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Footer} from './footer/footer';
import {Menu} from './menu/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [
    RouterOutlet,
    Footer,
    Menu
  ]
})
export class App {
  protected readonly title = signal('todo-ui');
}
