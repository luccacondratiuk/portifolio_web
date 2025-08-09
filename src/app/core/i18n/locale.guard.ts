import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const SUPPORTED_LANGS = ['en', 'pt-br'];

export const LocaleGuard: CanActivateFn = (route) => {
  const lang = route.paramMap.get('lang') ?? '';
  const router = inject(Router);

  if (SUPPORTED_LANGS.includes(lang)) {
    return true;
  }

  return router.parseUrl('/pt-br');
};

