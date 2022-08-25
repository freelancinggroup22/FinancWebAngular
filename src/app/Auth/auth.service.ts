import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UserTypes } from 'src/app/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private usuario!: UsuarioTypes;
  private authenticatedUser = false;

  constructor(private router: Router) {}

  login(usuario: UserTypes) {
    if (
      usuario.username != '' &&
      usuario.password != '' &&
      usuario.username != null &&
      usuario.password != null
    ) {
      console.log('Debugger in AuthService:', usuario);

      this.authenticatedUser = true;

      this.router.navigate(['/dashboard']);
    } else {
      this.authenticatedUser = false;
    }
  }
}
