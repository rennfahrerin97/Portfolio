import {Component, Input, OnInit} from '@angular/core'
import {User} from '../app.component'

let user : User

@Component({
    selector: 'app-fon',
    templateUrl: './fon.component.html',
    styleUrls: ['./fon.component.scss']
})
export class FonComponent {

    @Input() user: any
    name = 'Dmytro Hobatiuk'
    description = 'Personal website of the storyteller'
    avatar = '../assets/avatar.jpg'

    facebook_icon = '../assets/facebook_black.png'
    instagram_icon = '../assets/instagram_black.png'
    linkdin_icon = '../assets/linkdin_black.png'

    facebook_url = 'https://www.facebook.com/profile.php?id=100069989741012'
    instagram_url = 'https://www.instagram.com/tyt.ua/'
    linkdin_url = '#'

    nav_work = '#'
    nav_about_me = '#'
    nav_blog = '#'

    openWork() {
        console.log('work')
    }

    openAbout() {
        console.log('About me')
    }

    openBlog() {
        console.log('Blog')
    }

}

