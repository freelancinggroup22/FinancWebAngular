import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { SharedService, WalletsTypes } from 'src/app/shared';

@Component({
  selector: 'app-create-wallets',
  templateUrl: './create-wallets.component.html',
  styleUrls: ['./create-wallets.component.scss'],
})
export class CreateWalletsComponent implements OnInit {
  newWallet!: FormGroup;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.newWallet = this.formBuilder.group<WalletsTypes>({
      name: '',
    });
  }

  handleCreateWallet() {}
}
