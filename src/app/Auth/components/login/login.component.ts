import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  loginForms!: FormGroup;

  ngOnInit(): void {
    this.loginForms = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  login() {
    console.log('Debugger in LoginComponent:', this.loginForms);
  }
}
