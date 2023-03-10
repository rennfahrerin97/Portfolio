import { Component, Input, Output} from '@angular/core';
import {Article} from '../app.component'

@Component({
  selector: 'app-modal-blog',
  templateUrl: './modal-blog.component.html',
  styleUrls: ['./modal-blog.component.scss']
})
export class ModalWorkComponent {

  @Input() blog : Article

  closeArticle() {
    let modal_article = document.querySelector('.modal') as HTMLElement
    modal_article.setAttribute('style', 'display : none')
  }
}
