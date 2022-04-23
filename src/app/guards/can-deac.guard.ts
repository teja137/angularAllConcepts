import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddPeopleComponent } from '../add-people/add-people.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeacGuard implements CanDeactivate<AddPeopleComponent> {
  canDeactivate(component:AddPeopleComponent){
    if(component.name.dirty){
      return window.confirm("You have some unsaved changes. Are you sure you want to navigate?")
    }
    return true;
  }
  
}
