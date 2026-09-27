import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../models/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoData {

  constructor(
    private http: HttpClient
  ) {
  }

  retrieveAllToDos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }
  deleteTodo(username:string,id:number){
    return this.http.delete(`http://localhost:8080/users/${username}/todo/${id}`)
  }
}
