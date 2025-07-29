import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Home - Landing Page'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'Sobre - Landing Page'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.ProjectsComponent),
    title: 'Projetos - Landing Page'
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then(m => m.ResumeComponent),
    title: 'Currículo - Landing Page'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contato - Landing Page'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
