import {Component} from '@angular/core';
import {Todo} from '../models/todo';
import {DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  imports: [
    DatePipe,
    UpperCasePipe
  ],
  selector: 'app-list-todos',
  styleUrl: './list-todos.css',
  templateUrl: './list-todos.html',
  standalone: true
})


export class ListTodos {

  todos: Todo[] = [
    {id: 1, description: 'learn to Dance', done: false, targetDate: new Date()},
    {id: 2, description: 'Become an expert at Angular', done: false, targetDate: new Date()},
    {id: 3, description: 'learn react', done: false, targetDate: new Date()},
    {id: 4, description: 'learn Spring boot', done: false, targetDate: new Date()},
    {id: 5, description: 'Visit India', done: false, targetDate: new Date()},
  ]

  constructor() {
  }

}
