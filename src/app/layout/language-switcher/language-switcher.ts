import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { I18nService } from '../../core/i18n/i18n.service';

@Component({
  selector: 'app-language-switcher',
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.scss'
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(private i18nService: I18nService, private router: Router) {
    this.currentLang = this.i18nService.lang().toLowerCase();
  }

  switchLanguage(lang: string): void {
    const serviceLang = lang === 'pt-br' ? 'pt-BR' : lang;
    if (serviceLang === this.i18nService.lang()) {
      return;
    }
    this.i18nService.use(serviceLang);
    const currentUrl = this.router.url;
    const pathWithoutLang = currentUrl.replace(/^\/(en|pt-br)/, '');
    this.router.navigateByUrl(`/${lang}${pathWithoutLang}`);
    this.currentLang = lang;
  }
}
