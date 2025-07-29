import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Sobre' },
    { path: '/projects', label: 'Projetos' },
    { path: '/resume', label: 'Currículo' },
    { path: '/contact', label: 'Contato' }
  ];
}
