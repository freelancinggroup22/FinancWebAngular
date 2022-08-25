import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/Auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

  loginForms!: FormGroup;

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  userLogin() {
    this.authService.login(this.loginForms.value);
  }
}
