import {ElementRef, EventEmitter, Injectable, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5';

@Injectable()
export class AuthService {

  loggedIn = new EventEmitter<boolean>();
  authenticated = false;

  constructor(private router: Router) {}

  login(userName: string, password: string) {
    const hashedPass = Md5.hashStr(password);
    if (userName === 'mestahh' && hashedPass === '08c2c1c773c176fac4dbee801d92cd7b') {
      this.authenticated = true;
      this.loggedIn.emit(true);
      this.router.navigate(['/']);
    }
  }

  logout() {
    this.authenticated = false;
    this.loggedIn.emit(false);
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      resolve(this.authenticated);
    });
  }
}
