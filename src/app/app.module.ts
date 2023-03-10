import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FonComponent } from './fon/fon.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ModalWorkComponent } from './modal-work/modal-work.component';
import { ModalBlogComponent } from './modal-blog/modal-blog.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ModalResumeComponent } from './modal-resume/modal-resume.component';
import { ArticlesComponent } from './articles/articles.component'


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
    ModalContactComponent,
    ModalResumeComponent,
    ArticlesComponent,
    ModalBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
