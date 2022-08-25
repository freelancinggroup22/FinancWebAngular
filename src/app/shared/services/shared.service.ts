import { Injectable } from '@angular/core';

import { data } from 'src/app/shared/data';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  listarCarteiras() {
    return data.transactions;
  }
}
