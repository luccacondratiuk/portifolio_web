import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private router = inject(Router);

  get currentLang(): string {
    const lang = this.router.url.split('/')[1];
    return lang || 'pt-br';
  }

  getLink(path: string) {
    return ['/', this.currentLang, path].filter(Boolean);
  }
}
