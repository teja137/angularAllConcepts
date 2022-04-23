import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPeopleComponent } from '../add-people/add-people.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeacGuard implements CanDeactivate<AddPeopleComponent> {
  canDeactivate(){
    return true;
  }
  
}
