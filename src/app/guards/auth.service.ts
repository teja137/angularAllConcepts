import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get isLoggedIn(){
    return false;
  }

  get CanActChild(){
    return false
  }
}
