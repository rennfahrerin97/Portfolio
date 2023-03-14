import { Component, Input} from '@angular/core';
import {Article} from '../app.component'

@Component({
  selector: 'app-modal-work',
  templateUrl: './modal-work.component.html',
  styleUrls: ['./modal-work.component.scss']
})
export class ModalWorkComponent {

  @Input() work : Article

  closeArticle() {
    let modal_window = document.getElementById('modal-work')?.classList
    let active_class = 'opened'
    modal_window?.remove(active_class)
  }
}
