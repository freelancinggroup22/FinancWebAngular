import { Component } from '@angular/core';

import { AuthService } from 'src/app/Auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'financ-web-angular';

  isAuthenticate = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.showMenuEmmiter.subscribe((show) => (this.isAuthenticate = show));
  }
}
