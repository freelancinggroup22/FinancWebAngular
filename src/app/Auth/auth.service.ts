import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';

import { AccountResponseTypes, AccountTypes, UserTypes } from 'src/app/shared';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private usuario!: UsuarioTypes;
  private authenticatedUser = false;
  private baseUrl = environment.baseUrl;
  private uid = '';
  private headers: HttpHeaders;

  showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private router: Router, private http: HttpClient) {}

  setHeaders(token: string) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  getHeader(): HttpHeaders {
    return this.headers;
  }

  getUserId(): string {
    return this.uid;
  }

  userLogin(user: AccountTypes) {
    this.http
      .post<AccountResponseTypes>(`${this.baseUrl}/authenticate`, user)
      .subscribe((response) => {
        if (response.value.refreshToken) {
          this.uid = response.value.uid;
          this.setHeaders(response.value.accessToken);
          this.changeValuesAuthMenu(!!response.value.accessToken, '/dashboard');
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
