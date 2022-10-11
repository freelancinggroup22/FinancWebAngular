import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter, Input } from '@angular/core';

import { WalletsTypes, TransactionTypes } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl: string;

  @Output() idWallets = new EventEmitter();
  @Output() idUser = new EventEmitter();
  @Input() valueWallet = 0;

  constructor(private http: HttpClient) {
    this.baseUrl = 'assets/wallets.json';
  }

  getIdWallet(id: any) {
    this.idWallets.emit(id);
  }

  getOneWallet(id = this.valueWallet) {
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => {
        return data.filter((element) => Number(element.id) === id);
      });
  }

  getOneWalletTest(id = this.valueWallet) {
    return this.http.get<any>(this.baseUrl).subscribe({
      next: (res) => <WalletsTypes[]>res.data,
    });
  }

  getAllWallets() {
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => data);
  }

  // getOneWallet(userId = this.idUser, walletId = this.valueWallet): Observable<WalletsTypes> {
  //   return this.http.get<WalletsTypes>(`${this.baseUrl}/${userId}/${walletId}`);
  // }

  // getAllWallets(userId = this.idUser): Observable<WalletsTypes[]> {
  //   return this.http.get<WalletsTypes[]>(`${this.baseUrl}/${userId}`);
  // }
}
