import { Component, Input } from '@angular/core';
import User from '../app.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  @Input() user = new User ();

  openContact(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-contact')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    }

  openResume(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-resume')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    }
}
