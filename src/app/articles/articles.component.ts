import { Component, Input, Output, EventEmitter} from '@angular/core';
import User from '../app.component';
import {Article} from '../app.component';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent {

  @Input() user = new User () 
  @Input() articles : Article
  @Input() article : Article

  @Output() sendArticleId = new EventEmitter()

  openArticle(openModal) {
    if (openModal === true) {
      let modal_window = document.getElementById('modal-work')?.classList
      let active_class = 'opened'
      modal_window?.add(active_class)
    }
    openModal = false;
    this.sendArticleId.emit(this.article.id);
    }
}
