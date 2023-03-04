import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FonComponent} from './fon/fon.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ModalWorkComponent } from './modal-work/modal-work.component';
import { ModalBlogComponent } from './modal-blog/modal-blog.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ModalResumeComponent } from './modal-resume/modal-resume.component'

@NgModule({
  declarations: [
    AppComponent,
    FonComponent,
    IntroComponent,
    HeaderComponent,
    FooterComponent,
    WorksComponent,
    BlogComponent,
    AboutComponent,
    ModalWorkComponent,
    ModalBlogComponent,
    ModalContactComponent,
    ModalResumeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
