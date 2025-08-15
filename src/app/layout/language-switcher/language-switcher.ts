import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadTranslations } from '@angular/localize';
import { ɵsetLocaleId as setLocaleId } from '@angular/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrls: ['./language-switcher.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  currentLang = 'pt-BR';

  ngOnInit() {
    this.currentLang = localStorage.getItem('locale') || 'pt-BR';
  }

  async switchLanguage(lang: string) {
    if (lang === this.currentLang) {
      return;
    }
    if (lang !== 'pt-BR') {
      const translations = await import(`../../../locale/messages.${lang}.json`);
      loadTranslations(translations.default);
    }
    setLocaleId(lang);
    localStorage.setItem('locale', lang);
    location.reload();
  }
}
