import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WalletsTypes } from './../types/wallets.interface';

import { data } from 'src/app/shared/data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  listarCarteiras() {
    return data.transactions;
  }

  getWallets() {
    return this.http
      .get<any>('assets/wallets.json')
      .toPromise()
      .then((res) => <WalletsTypes[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
