import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from '../service/data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
   
  constructor(private auth: DataServiceService, private router: Router) {
    
  }

  canActivate(): boolean {
    if(this.auth.isLoggedIn()){ 
      return true;
    } else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
