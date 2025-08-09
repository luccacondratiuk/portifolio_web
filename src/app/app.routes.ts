import { Routes } from '@angular/router';
import { LocaleGuard } from './core/i18n/locale.guard';

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LocaleGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
        title: 'home.title'
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
        title: 'about.title'
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent),
        title: 'projects.title'
      },
      {
        path: 'resume',
        loadComponent: () => import('./pages/resume/resume').then(m => m.ResumeComponent),
        title: 'resume.title'
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
        title: 'contact.title'
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pt-br'
  },
  {
    path: '**',
    redirectTo: 'pt-br'
  }
];
