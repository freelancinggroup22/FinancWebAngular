import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserTypes } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private usuario!: UsuarioTypes;
  private authenticatedUser = false;

  constructor(private router: Router) {}

  showMenuEmmiter = new EventEmitter<boolean>();

  changeValuesAuthMenu(state: boolean, router?: string) {
    this.authenticatedUser = state;
    this.showMenuEmmiter.emit(state);
    this.router.navigate([router]);
  }

  userLogin(user: UserTypes) {
    if (user.email != '' && user.password != '' && user.email != null && user.password != null) {
      this.changeValuesAuthMenu(true, '/dashboard');
    } else {
      this.changeValuesAuthMenu(false);
    }
  }

  userRegister(user: UserTypes) {
    if (user.email != '' && user.email != null) {
      this.router.navigate(['login']);
    }
  }

  isAuthenticateUser() {
    return this.authenticatedUser;
  }

  callRegister() {
    this.router.navigate(['register']);
  }

  callLogout() {
    this.changeValuesAuthMenu(false, '/login');
  }
}
