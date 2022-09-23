import { Injectable, Input } from '@angular/core';

type CurrencyTypes = 'BRL' | 'USD';

const CurrencyLangs: Record<CurrencyTypes, string> = {
  BRL: 'pr-BR',
  USD: 'en-US',
};

@Injectable({
  providedIn: 'root',
})
export class Functionalities {
  @Input() displayInfos = true;
  @Input() displayTransaction = false;
  @Input() displayWallet = false;
  @Input() columDashboardMain = 'p-col-8';

  constructor() {}

  // progressBars = (valor1: number, valor2: number) => {
  //   const sub = valor1 - valor2;
  //   const sob = valor1 - sub;

  //   const bar1 = Number(((sub * 100) / valor1).toFixed(0));
  //   const bar2 = Number(((sob * 100) / valor1).toFixed(0));

  //   return { bar1, bar2 };
  // };

  formatCurrency(value = 0, currency: CurrencyTypes = 'BRL'): string {
    const price = new Intl.NumberFormat(CurrencyLangs[currency], {
      style: 'currency',
      currency,
    }).format(value);
    return price;
  }

  calculatePercentage = (income: number, outcome: number) => {
    const _total = income - outcome;

    let _income = ((income - outcome) * 100) / income || 0;
    _income = parseFloat(_income.toFixed(2));

    _income = _income < 0 ? 0 : _income;
    _income = _income > 100 ? 100 : _income;

    let _outcome = ((income - _total) * 100) / income || 0;
    _outcome = parseFloat(_outcome.toFixed(2));

    _outcome = _outcome < 0 ? 0 : _outcome;
    _outcome = _outcome > 100 ? 100 : _outcome;

    return { _income, _outcome };
  };

  formatText(text = '') {
    if (text != '') {
      return text[0].toUpperCase() + text.substring(1);
    }
    return;
  }

  showTransaction() {
    this.displayInfos = false;
    this.displayWallet = false;
    this.displayTransaction = true;
  }

  showWallet() {
    this.displayInfos = false;
    this.displayTransaction = false;
    this.displayWallet = true;
  }

  closeTransactionWallet() {
    this.displayInfos = true;
    this.displayWallet = false;
    this.displayTransaction = false;
  }
}
