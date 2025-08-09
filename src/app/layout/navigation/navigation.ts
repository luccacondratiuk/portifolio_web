import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  navigationItems = [
    { path: '/', label: 'LAYOUT.NAV.HOME' },
    { path: '/about', label: 'LAYOUT.NAV.ABOUT' },
    { path: '/projects', label: 'LAYOUT.NAV.PROJECTS' },
    { path: '/resume', label: 'LAYOUT.NAV.RESUME' },
    { path: '/contact', label: 'LAYOUT.NAV.CONTACT' }
  ];
}
