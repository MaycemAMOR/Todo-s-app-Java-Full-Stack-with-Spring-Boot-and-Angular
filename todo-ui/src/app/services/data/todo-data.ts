import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoBean} from '../../models/todoBean';
import {TODO_JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoData {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllToDos(username: string) {
    return this.http.get<TodoBean[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<TodoBean>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: TodoBean) {
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: TodoBean) {
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`, todo);
  }
}
