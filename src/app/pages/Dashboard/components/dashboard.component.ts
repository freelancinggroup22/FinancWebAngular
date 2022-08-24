import { Component, Input, OnInit, Output } from '@angular/core';

import { SharedService } from '../../../shared';

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
    console.log('Debugger in DashboardComponent:', this.transactionsDashboard);
  }

  transactionButton() {
    console.log('Debugger in DashboardComponent:', !this.newTransaction);

    return !this.newTransaction;
  }

  handleButtonEmit(event: any) {
    console.log('Debugger in DashboardComponent:', event);
  }
}
