import { Injectable, LOCALE_ID, Signal, computed, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private currentLang = signal('pt-BR');
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt-BR']);
    translate.setDefaultLang('pt-BR');
    this.use(this.currentLang());
  }

  use(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang);
  }

  lang(): string {
    return this.currentLang();
  }

  t(key: string, params?: Record<string, unknown>): string {
    return this.translate.instant(key, params);
  }
}

export const LOCALE_ID_PROVIDER = {
  provide: LOCALE_ID,
  deps: [I18nService],
  useFactory: (i18n: I18nService) => i18n.lang()
};
