import {Routes} from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Login} from './login/login';
import {Error} from './error/error';
import {ListTodos} from './list-todos/list-todos';
import {Logout} from './logout/logout';
import {RouteGuard} from './services/route-guard';
import {Todo} from './todo/todo';
import {todoResolver} from './resolver/todoResolver';

const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'welcome/:name',
    component: Welcome,
    canActivate: [RouteGuard]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'todos',
    component: ListTodos,
    canActivate: [RouteGuard]
  },
  {
    path: 'logout',
    component: Logout,
    canActivate: [RouteGuard]
  },
  {
    path: 'todos/:id',
    component: Todo,
    canActivate: [RouteGuard]
    /**
     ****
     * avec le Resolver fonctionnel (todoResolver.ts)
     */
    // ,
    // resolve: {
    //   todoData: todoResolver // La donnée sera accessible sous la clé 'todoData'
    // }
  },
  {
    path: '**',
    component: Error
  }
];
export default routes
