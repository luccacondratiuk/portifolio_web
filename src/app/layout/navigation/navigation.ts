import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  private router = inject(Router);

  navigationItems = [
    { path: '/', label: 'LAYOUT.NAV.HOME' },
    { path: '/about', label: 'LAYOUT.NAV.ABOUT' },
    { path: '/projects', label: 'LAYOUT.NAV.PROJECTS' },
    { path: '/resume', label: 'LAYOUT.NAV.RESUME' },
    { path: '/contact', label: 'LAYOUT.NAV.CONTACT' }
  ];

  get currentLang(): string {
    const lang = this.router.url.split('/')[1];
    return lang || 'pt-br';
  }

  getPath(path: string) {
    return ['/', this.currentLang, path].filter(Boolean);
  }
}
