import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';

import { SharedService, TransactionTypes, WalletsTypes } from 'src/app/shared';

interface StatusTypes {
  status: 'Pago' | 'Pendente' | 'Planejado';
}

interface CategoryTypes {
  category: string;
}

interface FlowTypes {
  flow: 'Income' | 'Outcome';
}

interface TypeTypes {
  type: 'Debito' | 'Credito' | 'Dinherio' | 'Investimento';
}

interface IconsType {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss'],
})
export class CreateTransactionComponent implements OnInit {
  typeArray!: TypeTypes[];
  typeSelected!: TypeTypes;

  statusArray!: StatusTypes[];
  statusSelected!: StatusTypes;

  walletsArray!: WalletsTypes[];
  walletSelected!: WalletsTypes;

  categoryArray!: CategoryTypes[];
  categorySelected!: CategoryTypes;

  iconArray!: IconsType[];
  iconSelected!: IconsType;

  newTransaction!: FormGroup;

  // flowIncome = this.flow('Income');
  // flowOutcome = this.flow('Outcome');

  flowSelected!: string;

  constructor(
    private primengConfig: PrimeNGConfig,
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
  ) {}

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

    this.typeArray = [
      { type: 'Debito' },
      { type: 'Credito' },
      { type: 'Dinherio' },
      { type: 'Investimento' },
    ];
    this.statusArray = [{ status: 'Pago' }, { status: 'Planejado' }, { status: 'Pendente' }];
    this.categoryArray = [
      { category: 'Compras' },
      { category: 'Alimentação' },
      { category: 'Salario' },
      { category: 'Transporte' },
      { category: 'Viagem' },
    ];

    this.iconArray = [
      { name: 'Money', icon: 'pi-money-bill' },
      { name: 'Mobile', icon: 'pi-mobile' },
      { name: 'Work', icon: 'pi-briefcase' },
      { name: 'Camera', icon: 'pi-camera' },
    ];

    this.sharedService.getAllWallets().then((wallets) => {
      this.walletsArray = wallets.filter((wallet) => wallet.name !== 'Total');
    });

    this.primengConfig.ripple = true;
  }

  flow(flow: string) {
    this.newTransaction.patchValue({ flow });
  }

  handleCreateTransaction() {
    console.log('Debugger in CreateTransactionComponent:', this.newTransaction.value);
  }
}
