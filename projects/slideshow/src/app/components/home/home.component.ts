import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../slideshow-lib/src/public-api';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
