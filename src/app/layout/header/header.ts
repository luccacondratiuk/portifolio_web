import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from '../navigation/navigation';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  imports: [NavigationComponent, TranslateModule, LanguageSwitcherComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

}
