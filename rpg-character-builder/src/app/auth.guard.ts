import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const authGuard:CanActivateFn=(route, state) => {
  const cookieService = inject(CookieService);
  if(cookieService.get('session_user')) {
    return true;
  } else {
    const router=inject(Router);
    router.navigate(['/signin'], {queryParams:{returnURL:state.url} });
    return false;
  }
};
