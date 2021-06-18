import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
  constructor(private Authguardservice: AuthGuardService, private router: Router) {}

  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
  }
  
}
