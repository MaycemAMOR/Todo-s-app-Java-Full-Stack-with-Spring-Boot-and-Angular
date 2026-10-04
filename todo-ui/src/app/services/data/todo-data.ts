import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoBean} from '../../models/todoBean';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoData {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllToDos(username: string) {
    return this.http.get<TodoBean[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<TodoBean>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: TodoBean) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: TodoBean) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }
}
