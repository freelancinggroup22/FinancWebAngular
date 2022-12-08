import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { AuthService } from 'src/app/Auth/auth.service';
import { Functionalities } from 'src/app/shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService, public functionalities: Functionalities) {}

  items: MenuItem[] = [];
  urlAvatar = 'assets/showcase/images/demo/walter.jpg';
  userName = this.authService.getUserName();

  activeItem: MenuItem = this.items[0];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-home',
        routerLink: '/dashboard',
      },
      // {
      //   label: 'Carteiras',
      //   icon: 'pi pi-fw pi-wallet',
      //   routerLink: '/wallets',
      // },
      // {
      //   label: 'Investimento',
      //   icon: 'pi pi-fw pi-money-bill',
      //   routerLink: '/investment',
      // },
      // { label: 'Ajuda', icon: 'pi pi-fw pi-question', routerLink: '/help' },
      // {
      //   label: 'Configurações',
      //   icon: 'pi pi-fw pi-cog',
      //   routerLink: '/settings',
      // },
    ];
  }

  signOut() {
    this.authService.callLogout();
    this.functionalities.closeTransactionWallet();
  }
}
