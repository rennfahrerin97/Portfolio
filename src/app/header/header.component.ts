import { Component, Input, HostListener} from '@angular/core';
import User from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() user = new User ();

  openContact(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-contact')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    }

    toWork() {
      document.getElementById('work')?.scrollIntoView({behavior:"smooth"});
    }

    toAbout() {
      document.getElementById('about_me')?.scrollIntoView({behavior:"smooth"});
    }

    toBlog() {
      document.getElementById('blog')?.scrollIntoView({behavior:"smooth"});
    }

    toContact() {
      document.getElementById('contact')?.scrollIntoView({behavior:"smooth"});
    }
}
