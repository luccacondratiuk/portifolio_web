import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavigationComponent, LanguageSwitcherComponent],
  //imports: [NavigationComponent],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {

}
