import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter, Input } from '@angular/core';

import { WalletsTypes, TransactionTypes } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private baseUrl: string;

  @Output() idWallets = new EventEmitter();
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

  getAllWallets() {
    return this.http
      .get<any>(this.baseUrl)
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => data);
  }
}
