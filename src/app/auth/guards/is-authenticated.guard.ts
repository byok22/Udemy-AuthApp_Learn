import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  const router = inject ( Router );
  const authService = inject ( AuthService );
  //const url = state.url;
  //localStorage.setItem('url', url);

  ///console.log({url});
  //console.log('isAutheticatedGuard');
  //console.log({route,state});

  
  console.log({status: authService.authStatus()})

  if ( authService.authStatus() === AuthStatus.authenticated ) {return true};
  //if ( authService.authStatus() === AuthStatus.checking ) {return false};

  
  router.navigateByUrl('/auth/login')
  return false;

};
