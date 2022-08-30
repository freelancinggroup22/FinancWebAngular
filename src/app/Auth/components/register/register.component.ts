import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/Auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

  userRegister!: FormGroup;

  ngOnInit(): void {
    this.userRegister = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null],
      confirmpassword: [null],
    });
  }

  handleLogin() {
    this.authService.callLogout();
  }

  handleUserRegister() {
    this.authService.userRegister(this.userRegister.value);
  }
}
