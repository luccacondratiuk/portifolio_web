import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation';

@Component({
  selector: 'app-header',
  imports: [NavigationComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

}
