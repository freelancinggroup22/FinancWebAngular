import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

import { UserTypes, AccountTypes, AccountResponseTypes, RegisterTypes } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private usuario!: UsuarioTypes;
  private authenticatedUser = false;

  private baseUrl = environment.baseUrl;

  constructor(private router: Router, private http: HttpClient) {}

  showMenuEmmiter = new EventEmitter<boolean>();

  // getOneWallet(userId = this.idUser, walletId = this.valueWallet): Observable<WalletsTypes> {
  //   return this.http.get<WalletsTypes>(`${this.baseUrl}/${userId}/${walletId}`);
  // }

  userLogin(user: AccountTypes) {
    this.http
      .post<AccountResponseTypes>(`${this.baseUrl}/authenticate`, user)
      .subscribe((response) => {
        if (response.value.refreshToken) {
          this.changeValuesAuthMenu(!!response.value.refreshToken, '/dashboard');
        }
      });
  }

  changeValuesAuthMenu(state: boolean, router?: string) {
    this.authenticatedUser = state;
    this.showMenuEmmiter.emit(state);
    this.router.navigate([router]);
  }

  userRegister(user: UserTypes) {
    this.http.post(`${this.baseUrl}/register`, user).subscribe(() => {
      this.router.navigate(['login']);
    });
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
