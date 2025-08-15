import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ɵsetLocaleId as setLocaleId } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import '@angular/common/locales/global/pt';
import '@angular/common/locales/global/en';

async function bootstrap() {
  const locale = localStorage.getItem('locale') || 'pt-BR';
  if (locale !== 'pt-BR') {
    const translations = await import(`./locale/messages.${locale}.json`);
    loadTranslations(translations.default);
  }
  setLocaleId(locale);
  return bootstrapApplication(App, appConfig);
}

bootstrap().catch((err) => console.error(err));

