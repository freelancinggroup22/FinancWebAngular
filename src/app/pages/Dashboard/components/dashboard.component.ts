import { Component, Input, OnInit, Output } from '@angular/core';

import { SharedService } from 'src/app/shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private sharedService: SharedService) {}

  @Output() transactionsDashboard: any;

  @Input() newTransaction: any;

  ngOnInit(): void {
    this.transactionsDashboard = this.sharedService.listarCarteiras();
  }

  transactionButton() {
    return !this.newTransaction;
  }

  handleButtonEmit(event: any) {}
}
