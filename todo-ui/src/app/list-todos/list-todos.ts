import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import {TodoBean} from '../models/todoBean';
import {DatePipe, UpperCasePipe} from '@angular/common';
import {TodoData} from '../services/data/todo-data';
import {ActivatedRoute, Router} from '@angular/router';

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


export class ListTodos implements OnInit {


  todos: WritableSignal<TodoBean[] | null> = signal<TodoBean[] | null>(null);
  name: string = '';
  message: WritableSignal<String | null> = signal<String | null>(null);

  constructor(
    private todoService: TodoData,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    this.refreshTodos();

  }

  private refreshTodos() {
    this.todoService.retrieveAllToDos(this.name).subscribe({
      next: (response) => {
        console.log(response);
        this.todos.set(response);
      },
      error: (error) => {
        console.error(error)
      }
    });
  }

  protected deleteTodo(id: number) {

    this.todoService.deleteTodo(this.name, id).subscribe({
      next: response => {
        console.log(response);
        this.message.set(`Delete of Todo ${id} Successful !`);
        this.refreshTodos();
      },
      error: error => {
        console.log(error)
      }
    })
  }

  protected updateTodo(id: any) {
    console.log(`update Of Todo ${id} Successful !`)
    this.router.navigate(['todos', id]);

  }

  protected createTodo() {
    this.router.navigate(['todos', -1]);
  }
}


/**
 *
 * Approche 2 : Architecture 100% Réactive avec RxJS (BehaviorSubject)
 * Si vous ne voulez pas gérer manuellement les .subscribe(), vous pouvez lier votre Signal à un flux réactif RxJS qui se
 * déclenche via un signal de rafraîchissement (refresh$).
 *
 *
 * Comparatif des deux méthodes
 *          Méthode                 |                    Avantages                                  |               Inconvénients
 * ---------------------------------|---------------------------------------------------------------|--------------------------------------------------------
 *          refreshTodos()          |   Très facile à lire, simple à déboguer,                      |            Fait une requête HTTP supplémentaire
 *                                  |   parfaitement adapté aux cours Spring/Angular.               |
 *----------------------------------|---------------------------------------------------------------|---------------------------------------------------------
 *    Flux RxJS (refresh$)          |   100% Réactif, gestion propre de l'asynchronisme.            |            Nécessite de maîtriser les opérateurs RxJS
 *                                  |                                                               |                         (switchMap, Subject).
 *-------------------------------------------------------------------------------------------------------------------------------------------------------------
 */
// import {Component, OnInit, signal, WritableSignal} from '@angular/core';
// import {BehaviorSubject, switchMap} from 'rxjs';
// import {TodoData} from '../services/data/todo-data';
// import {ActivatedRoute} from '@angular/router';
// import {Todo} from '../models/todo';
// import {DatePipe, UpperCasePipe} from '@angular/common';
//
// @Component({
//   imports: [
//     DatePipe,
//     UpperCasePipe
//   ],
//   selector: 'app-list-todos',
//   styleUrl: './list-todos.css',
//   templateUrl: './list-todos.html',
//   standalone: true
// })
// export class ListTodos implements OnInit {
//
//   // Événement déclencheur de rafraîchissement
//   private refresh$ = new BehaviorSubject<void>(undefined);
//
//   todos: WritableSignal<Todo[] | null> = signal<Todo[] | null>(null);
//   name: string = '';
//   message: WritableSignal<string | null> = signal<string | null>(null);
//
//   constructor(
//     private todoService: TodoData,
//     private route: ActivatedRoute
//   ) {}
//
//   ngOnInit(): void {
//     this.name = this.route.snapshot.params['name'];
//
//     // Écoute le flux : chaque fois que refresh$ émet une valeur, la liste est rechargée
//     this.refresh$.pipe(
//       switchMap(() => this.todoService.retrieveAllToDos(this.name))
//     ).subscribe(response => this.todos.set(response));
//   }
//
//   protected deleteTodo(id: number): void {
//     this.todoService.deleteTodo(this.name, id).subscribe({
//       next: () => {
//         this.message.set(`Delete of Todo ${id} Successful !`);
//         this.refresh$.next(); // Émet un signal -> déclenche le switchMap automatiquement
//       }
//     });
//   }
// }
