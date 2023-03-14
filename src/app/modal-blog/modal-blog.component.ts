import { Component, Input } from '@angular/core';
import {Article} from '../app.component'

@Component({
  selector: 'app-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.scss']
})
export class ModalBlogComponent {
  @Input() blog : Article

  closeBlog() {
    let modal_window = document.getElementById('modal-blog')?.classList
    let active_class = 'opened'
    modal_window?.remove(active_class)
  }
}
