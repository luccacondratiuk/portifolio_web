import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  private router = inject(Router);

  navigationItems = [
    { path: '', label: 'Home' },
    { path: 'about', label: 'Sobre' },
    { path: 'projects', label: 'Projetos' },
    { path: 'resume', label: 'Currículo' },
    { path: 'contact', label: 'Contato' }
  ];

  get currentLang(): string {
    const lang = this.router.url.split('/')[1];
    return lang || 'pt-br';
  }

  getPath(path: string) {
    return ['/', this.currentLang, path].filter(Boolean);
  }
}
