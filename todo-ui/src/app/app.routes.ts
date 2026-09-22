import {Routes} from '@angular/router';
import {Welcome} from './welcome/welcome';
import {Login} from './login/login';
import {Error} from './error/error';
import {ListTodos} from './list-todos/list-todos';
import {Logout} from './logout/logout';
import {RouteGuard} from './services/route-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login
  },
  {
    path: 'welcome/:name',
    component: Welcome,
    canActivate:[RouteGuard]
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'todos',
    component: ListTodos,
    canActivate:[RouteGuard]
  },
  {
    path:'logout',
    component:Logout,
    canActivate:[RouteGuard]
  },
  {
    path: '**',
    component: Error
  }
];
