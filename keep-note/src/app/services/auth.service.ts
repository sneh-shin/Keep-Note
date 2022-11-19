import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn = false;

  login(username:string,password:string) {
    if (username === 'Sneha' && password === 'SnehaShinde') {
      this.isLoggedIn = true;
      return true;
    }
    return false;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
