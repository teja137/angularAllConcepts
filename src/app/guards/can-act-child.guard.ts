import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActChild implements CanActivateChild {
  constructor(private auth:AuthService){}
  canActivateChild() {
    if(this.auth.CanActChild){
      return true
    } else false
  }
  
}
