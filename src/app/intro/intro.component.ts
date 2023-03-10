import { Component, Input } from '@angular/core';
import User from '../app.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  @Input() user = new User ();
}
