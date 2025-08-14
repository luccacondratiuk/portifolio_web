import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcherComponent {
  currentLang: string = 'pt-BR';

  constructor(private i18nService: I18nService, private router: Router) {
    this.currentLang = this.i18nService.currentLang;
  }

  switchLanguage(lang: string): void {
    if (lang === this.i18nService.currentLang) {
      return;
    }
    this.i18nService.setLanguage(lang);
    const currentUrl = this.router.url;
    const pathWithoutLang = currentUrl.replace(/^\/(en|pt-BR)/, '');
    this.router.navigateByUrl(`/${lang}${pathWithoutLang}`);
    this.currentLang = lang;
  }
}
