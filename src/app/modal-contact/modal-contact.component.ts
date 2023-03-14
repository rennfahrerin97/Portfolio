import { Component, Input} from '@angular/core';
import User from '../app.component'; 

@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.scss']
})

export class ModalContactComponent {
  @Input() user = new User ();

  closeContact() {
    let modal_window = document.getElementById('modal-contact')?.classList
    let active_class = 'opened'
    modal_window?.remove(active_class)
  }
}
