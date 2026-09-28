import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {TodoData} from '../services/data/todo-data';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoBean} from '../models/todoBean';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
  imports: [
    FormsModule,
    DatePipe
  ],
  selector: 'app-todo',
  styleUrl: './todo.css',
  templateUrl: './todo.html',
  standalone: true
})
export class Todo implements OnInit {
  todo: WritableSignal<TodoBean | null> = signal<TodoBean | null>(null);

  name: string = '';
  todoId: number = -1;

  constructor(
    private todoService: TodoData,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {

    this.name = sessionStorage.getItem('authenticateUser') || '';
    this.todoId = this.route.snapshot.params['id'];
    console.log(this.name);
    console.log(this.todoId);
    // Initialisation d'un nouveau Todo si id vaut -1
    this.todo.set(new TodoBean(this.todoId, '', false, new Date()));

    // 3. Charger les données du backend uniquement s'il s'agit d'une modification
    if (this.todoId !== -1) {
      this.todoService.retrieveTodo(this.name, this.todoId).subscribe({
        next: response => {
          this.todo.set(response);
          console.log(response.description);
          console.log(response.targetDate);
        },
        error: error => {
          console.error('Erreur lors de la récupération du Todo:', error);
        }
      });
    }

  }

  protected saveTodo() {
    const todoValue = this.todo(); // Extraction de la valeur du Signal
    if (!todoValue) return;

    if (this.todoId === -1) {
      //creation de todo
    } else {
      //update todo
      this.todoService.updateTodo(this.name, this.todoId, todoValue).subscribe({
        next: (response) => {
          console.log(response)
          this.router.navigate(['todos'])

        },
        error: (error) => {
          console.log(error)
        }
      })
    }


  }
}


/**
 ****
 * avec le Resolver fonctionnel (todoResolver.ts)
 */
// import { Component, OnInit, signal, WritableSignal } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { TodoBean } from '../models/todoBean';
// import { FormsModule } from '@angular/forms';
//
// @Component({
//   imports: [FormsModule],
//   selector: 'app-todo',
//   templateUrl: './todo.html',
//   standalone: true
// })
// export class Todo implements OnInit {
//   todo: WritableSignal<TodoBean | null> = signal<TodoBean | null>(null);
//
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router
//   ) {}
//
//   ngOnInit(): void {
//     // La donnée est immédiatement prête, aucun délai HTTP dans le composant
//     const resolvedTodo: TodoBean = this.route.snapshot.data['todoData'];
//     this.todo.set(resolvedTodo);
//   }
//
//   protected saveTodo() {
//
//   }
// }
