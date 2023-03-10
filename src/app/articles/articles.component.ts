import { Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
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

  @Output() sendId = new EventEmitter()

  openArticle(openModal) {
    if (openModal === true) {
      let modal_article = document.querySelector('.modal') as HTMLElement
      modal_article.setAttribute('style', 'display : flex')
    }
    this.sendId.emit(this.article.id);
    }
}
