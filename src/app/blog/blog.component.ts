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

  openArticle(openModal) {
    if (openModal === true) {
      let modal_article = document.querySelector('.modal') as HTMLElement
      modal_article.setAttribute('style', 'display : flex')
    }
    this.sendBlogId.emit(this.blog.id);
    //console.log(this.blog);
    }
}
