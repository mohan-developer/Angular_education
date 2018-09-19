import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';

const menuRouts: Routes = [
  {path : '', component : HomeComponent},
  {path : 'about', component : AboutComponent},
  {path : 'blog', component : BlogComponent},
  {path : 'gallery', component : GalleryComponent},
  {path : 'contacts', component : ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(menuRouts,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
