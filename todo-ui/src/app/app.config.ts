import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import {provideRouter} from '@angular/router';
import routes from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpInterceptorBasicAuth} from './services/http/http-interceptor-basic-auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
    ,
    provideHttpClient(
      withInterceptorsFromDi() // Obligatoire pour charger les interceptors basés sur des classes
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorBasicAuth,
      multi: true
    }
  ]
};
