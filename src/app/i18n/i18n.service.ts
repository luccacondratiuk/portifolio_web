import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly _language$ = new BehaviorSubject<string>('pt-br');

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

