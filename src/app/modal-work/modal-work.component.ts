import { Component, Input, Output} from '@angular/core';
import {Article} from '../app.component'

@Component({
  selector: 'app-modal-work',
  templateUrl: './modal-work.component.html',
  styleUrls: ['./modal-work.component.scss']
})
export class ModalWorkComponent {

  @Input() modal : Article

  closeArticle() {
    let modal_article = document.querySelector('.modal') as HTMLElement
    modal_article.setAttribute('style', 'display : none')
  }

}
