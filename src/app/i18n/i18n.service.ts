import { Injectable, LOCALE_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _language$ = new BehaviorSubject<string>('pt-BR');

  get currentLang(): string {
    return this._language$.value;
  }

  setLanguage(lang: string): void {
    this._language$.next(lang);
  }

  languageChanges(): Observable<string> {
    return this._language$.asObservable();
  }
}

export const LOCALE_ID_PROVIDER = {
  provide: LOCALE_ID,
  deps: [I18nService],
  useFactory: (i18n: I18nService) => i18n.currentLang
};

