import { Component, Input, OnInit, Output } from '@angular/core';

import { SharedService } from 'src/app/shared';
import { environment as environment1 } from 'src/environments/environment';
import { environment as environment2 } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  @Output() transactionsDashboard: any;

  @Input() newTransaction: any;

  ngOnInit(): void {
    this.transactionsDashboard = this.sharedService.listarCarteiras();
    console.log(environment1);
    console.log(environment2);
  }

  transactionButton() {
    return !this.newTransaction;
  }

  handleButtonEmit(event: any) {}
}
