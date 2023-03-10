import {Component, Input, HostListener} from '@angular/core';
import User from '../app.component';

@Component({
    selector: 'app-fon',
    templateUrl: './fon.component.html',
    styleUrls: ['./fon.component.scss']
})

export class FonComponent {

    @Input() user = new User ();

    @HostListener('document:mousemove', ['$event']) 
    onMouseMove(e) {
        e = e || window.e
        const x = e.pageX / document.documentElement.clientWidth
        const y = e.pageY / document.documentElement.clientHeight

        let parallax = document.querySelector('.mouse-parallax__background') as HTMLElement
        parallax.setAttribute('style', 'transform: translate(-' + x * 50 + 'px, -' + y * 50 + 'px)')
    }
}

