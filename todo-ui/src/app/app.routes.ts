import {Routes} from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Login} from './login/login';
import {Error} from './error/error';
import {ListTodos} from './list-todos/list-todos';
import {Logout} from './logout/logout';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'welcome/:name',
    component: Welcome
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'todos',
    component: ListTodos
  },
  {
    path:'logout',
    component:Logout
  },
  {
    path: '**',
    component: Error
  }
];
