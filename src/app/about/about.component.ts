import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

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
