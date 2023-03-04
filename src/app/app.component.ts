import { Component } from '@angular/core';

export interface User {
    first_name: 'Dmytro',
    last_name: 'Hobatiuk',
    profession_1: 'Storyteller',
    profession_2: 'Project manager',
    description: 'Personal website of the storyteller',
    facebook_url: 'https://www.facebook.com/profile.php?id=100069989741012',
    instagram_url: 'https://www.instagram.com/tyt.ua/',
    linkdin_url: '#',
    facebook_icon_black: '../assets/facebook_black.png',
    instagram_icon_black: '../assets/instagram_black.png',
    linkdin_icon_black: '../assets/linkdin_black.png',
    facebook_icon_grey: '../assets/facebook_grey.png',
    instagram_icon_grey: '../assets/instagram_grey.png',
    linkdin_icon_grey: '../assets/linkdin_grey.png'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
