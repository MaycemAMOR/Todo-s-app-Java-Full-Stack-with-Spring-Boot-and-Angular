import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { TodoData } from '../services/data/todo-data';
import { TodoBean } from '../models/todoBean';

export const todoResolver: ResolveFn<TodoBean> = (route) => {
  const todoService = inject(TodoData);
  const username = sessionStorage.getItem('authenticateUser') || '';
  const id = +route.params['id'];

  // En création : retourne immédiatement un objet vierge
  if (id === -1) {
    return of(new TodoBean(-1, '', false, new Date()));
  }

  // En modification : pré-charge la donnée depuis le backend Spring
  return todoService.retrieveTodo(username, id);
};
