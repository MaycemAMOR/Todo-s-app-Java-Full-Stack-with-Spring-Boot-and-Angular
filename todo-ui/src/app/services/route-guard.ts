import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {BasicAuthentication} from './basic-authentication';

@Injectable({
  providedIn: 'root'
})

export class RouteGuard implements CanActivate {

  constructor(
    // private hardcodedAuthentication: HardcodedAuthentication,
     private basicAuth: BasicAuthentication, // il faut injecter le  BasicAuthentication pour que le routeGarde permet de changer les page
    private router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.basicAuth.isUserLoggedIn())
      return true
    this.router.navigate(['login']);
    return false;


  }
}
