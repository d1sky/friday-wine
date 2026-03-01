import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavLinksComponent } from './shared/nav-links/nav-links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavLinksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private router = inject(Router);
  private viewport = inject(ViewportScroller);
  isMenuOpen = false;

  constructor() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu();
        this.viewport.scrollToPosition([0, 0]);
      });
  }

  openMenu() {
    this.isMenuOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('menu-overlay')) {
      this.closeMenu();
    }
  }
}

