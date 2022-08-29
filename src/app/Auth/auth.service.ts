import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserTypes } from 'src/app/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private usuario!: UsuarioTypes;
  private authenticatedUser = false;

  constructor(private router: Router) {}

  showMenuEmmiter = new EventEmitter<boolean>();

  login(usuario: UserTypes) {
    if (
      usuario.username != '' &&
      usuario.password != '' &&
      usuario.username != null &&
      usuario.password != null
    ) {
      this.authenticatedUser = true;
      this.showMenuEmmiter.emit(true);

      this.router.navigate(['/dashboard']);
    } else {
      this.logout();
    }
  }

  logout() {
    this.authenticatedUser = false;
    this.showMenuEmmiter.emit(false);
    this.router.navigate(['/']);
  }
}
