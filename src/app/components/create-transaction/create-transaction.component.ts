import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { SharedService, TransactionTypes, WalletsTypes } from 'src/app/shared';

interface StatusTypes {
  status: 'Pago' | 'Pendente' | 'Planejado';
}

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent implements OnInit {
  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
  ) {}

  text: string | undefined;
  results: string[] = [];

  statusArray!: StatusTypes[];
  statusSelected!: StatusTypes;

  walletsArray!: WalletsTypes[];
  walletSelected!: WalletsTypes;

  newTransaction!: FormGroup;

  ngOnInit(): void {
    this.newTransaction = this.formBuilder.group<TransactionTypes>({
      name: '',
      date: '',
      flow: '',
      value: 0,
      status: 'Pendente',
      category: '',
      description: '',
      type: '',
      installments: [],
      iconCategory: '',
      wallet: '',
    });

    this.statusArray = [{ status: 'Pago' }, { status: 'Planejado' }, { status: 'Pendente' }];

    this.sharedService.getWallets().then((wallets) => {
      this.walletsArray = wallets.filter((wallet) => wallet.name !== 'Total');
    });

    this.primengConfig.ripple = true;
  }

  handleCreateTransaction() {
    console.log('Debugger in CreateTransactionComponent:', this.newTransaction.value);
  }

  // search(event: any) {}
}
