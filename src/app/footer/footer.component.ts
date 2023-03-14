import { Component, Input, HostListener } from '@angular/core';
import User from '../app.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  @Input() user = new User();

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

  openContact(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-contact')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    }

    @HostListener('document:scroll', ['$event']) 
    onScrollPage(e) {
      let nav_bar = document.getElementById('nav_bar')?.classList
      let active_class = 'scrolled'
      if(window.pageYOffset > 600) nav_bar?.add(active_class)
      else nav_bar?.remove(active_class)
    }

}
