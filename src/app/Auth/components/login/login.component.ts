import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  loginForms!: FormGroup;

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }

  handleLogin() {
    this.authService.userLogin(this.loginForms.value);
  }

  handleRegister() {
    this.authService.callRegister();
  }
}
