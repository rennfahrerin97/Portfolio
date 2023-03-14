import { Component} from '@angular/core';

@Component({
  selector: 'app-modal-resume',
  templateUrl: './modal-resume.component.html',
  styleUrls: ['./modal-resume.component.scss']
})
export class ModalResumeComponent {

  closeResume() {
    let modal_window = document.getElementById('modal-resume')?.classList
    let active_class = 'opened'
    modal_window?.remove(active_class)
  }
}
