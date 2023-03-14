import { Component, Input } from '@angular/core';
import User from '../app.component'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @Input() user = new User ();
}
