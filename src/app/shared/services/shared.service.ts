import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WalletsTypes, TransactionTypes } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'assets/wallets.json';
  }

  getOneWallet(id: any) {
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => {
        return data.filter((element) => element.id === id);
      });
  }

  getWallets() {
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => data);
  }
}
