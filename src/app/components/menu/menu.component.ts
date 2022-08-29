import { Component, OnInit } from '@angular/core';

import { AuthService } from './../../Auth/auth.service';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  items: MenuItem[] = [];

  activeItem: MenuItem = this.items[0];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/dashboard',
      },
      {
        label: 'Carteiras',
        icon: 'pi pi-fw pi-wallet',
        routerLink: '/wallets',
      },
      {
        label: 'Investimento',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: '/investment',
      },
      { label: 'Ajuda', icon: 'pi pi-fw pi-question', routerLink: '/help' },
      {
        label: 'Configurações',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/settings',
      },
    ];
  }

  signOut() {
    this.authService.callLogout();
  }
}
