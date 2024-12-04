import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from './auth.service';

/**
 * Guard to prevent access to pages that require authentication.
 * Redirects to the login page if the user is not authenticated.
 */
export const needLoginGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (await authService.verifyToken()) {
    console.log('User is authenticated.');
    return true;
  } else {
    console.log('User is not authenticated. Redirecting to login page.');
    await router.navigate(['/login']);
    return false;
  }
};

/**
 * Guard to prevent access to login page if the user is already authenticated.
 */
export const needLogOutGuard: CanActivateFn = async () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (await authService.verifyToken()) {
    console.log('User is authenticated. Redirecting to main page.');
    await router.navigate(['']);
    return false;
  } else {
    console.log('User is not authenticated.');
    return true;
  }
};
