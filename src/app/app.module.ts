import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FonComponent } from './fon/fon.component';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ModalWorkComponent } from './modal-work/modal-work.component';
import { ModalContactComponent } from './modal-contact/modal-contact.component';
import { ModalResumeComponent } from './modal-resume/modal-resume.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ModalBlogComponent } from './modal-blog/modal-blog.component'

const appRoutes: Routes = [
  {path: '', component: FonComponent},
  {path: 'work', component: WorksComponent},
  {path: 'about_me', component: AboutComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent}
];

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
    ContactComponent,
    AdminComponent,
    ModalBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
