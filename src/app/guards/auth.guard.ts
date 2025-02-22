import { Router, type CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (
    authService.currentUser() === null ||
    authService.currentUser() === undefined
  ) {
    return true;
  } else {
    router.navigateByUrl('/');
    return false;
  }
};
