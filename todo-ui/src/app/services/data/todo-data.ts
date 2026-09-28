import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TodoBean} from '../../models/todoBean';

@Injectable({
  providedIn: 'root'
})

export class TodoData {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllToDos(username: string) {
    return this.http.get<TodoBean[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    return this.http.get<TodoBean>(`http://localhost:8080/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: TodoBean) {
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: TodoBean) {
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
