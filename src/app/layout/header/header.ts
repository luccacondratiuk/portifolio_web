import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NavigationComponent } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [NavigationComponent, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

}
