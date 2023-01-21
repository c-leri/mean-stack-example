import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent implements OnInit {
  currentTheme = localStorage.getItem('theme');

  ngOnInit(): void {
    this.setTheme(this.getPreferedTheme());
  }

  getPreferedTheme(): string {
    if (this.currentTheme) return this.currentTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }

  changeTheme(): void {
    this.currentTheme = this.getPreferedTheme() === 'dark' ? 'light' : 'dark';

    this.setTheme(this.currentTheme);
  }
}
