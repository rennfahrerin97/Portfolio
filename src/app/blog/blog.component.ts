import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Article} from '../app.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  @Input() blogs : Article
  @Input() blog : Article

  @Output() sendBlogId = new EventEmitter()

  openBlog(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-blog')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    this.sendBlogId.emit(this.blog.id);
    }
}
