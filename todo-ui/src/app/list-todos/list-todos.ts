import {Component} from '@angular/core';

@Component({
  imports: [
  ],
  selector: 'app-list-todos',
  styleUrl: './list-todos.css',
  templateUrl: './list-todos.html',
  standalone: true
})
export class ListTodos {

  todos= [
    {id: 1, description: 'learn to Dance'},
    {id: 2, description: 'Become an expert at Angular'},
    {id: 3, description: 'learn react'},
    {id: 4, description: 'learn Spring boot'},
    {id: 5, description: 'Visit India'}
  ]

  constructor() {
  }

}
