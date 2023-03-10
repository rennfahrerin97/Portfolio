import {Component, Input} from '@angular/core';
import User from '../app.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})

export class WorksComponent {
  @Input() user = new User (); 
}
