import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    // Módulos do Material
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './header.html',
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (localStorage.getItem('theme') === 'dark' ||
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.setTheme(true);
    } else {
      this.setTheme(false);
    }
  }

  toggleTheme(): void {
    this.setTheme(!this.isDarkMode);
  }

  private setTheme(isDark: boolean): void {
    this.isDarkMode = isDark;
    if (isDark) {
      this.renderer.addClass(document.body, 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
