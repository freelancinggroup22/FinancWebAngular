import { AuthService } from 'src/app/Auth';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter, Input } from '@angular/core';

import { WalletsTypes, WalletsResponseServiceTypes, TransactionTypes } from 'src/app/shared/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl: string;
  private idUser = '';
  private headers: HttpHeaders;

  @Output() idWallets = new EventEmitter();
  @Input() valueWallet = 0;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.baseUrl = environment.baseUrl;
    this.idUser = this.authService.getUserId();
    this.headers = this.authService.getHeader();
  }

  getIdWallet(id: any) {
    this.idWallets.emit(id);
  }

  getOneWallet(userId = this.idUser, walletId = this.valueWallet): Observable<WalletsTypes> {
    return this.http.get<WalletsTypes>(`${this.baseUrl}/${userId}/${walletId}`);
  }

  getAllWallets(userId = this.idUser): Observable<WalletsResponseServiceTypes> {
    return this.http.get<WalletsResponseServiceTypes>(`${this.baseUrl}/wallet/all`, {
      headers: this.headers,
    });
  }
}
