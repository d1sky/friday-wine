import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a
      routerLink="/"
      routerLinkActive="active"
      [routerLinkActiveOptions]="{ exact: true }"
    >
      Главная
    </a>
    <a routerLink="/history" routerLinkActive="active">История</a>
    <a routerLink="/geography" routerLinkActive="active">География</a>
    <a routerLink="/production" routerLinkActive="active">Производство</a>
    <a routerLink="/grapes" routerLinkActive="active">Сорта</a>
    <a routerLink="/wines" routerLinkActive="active">Стили вина</a>
    <a routerLink="/films" routerLinkActive="active">Кино</a>
  `
})
export class NavLinksComponent {}
