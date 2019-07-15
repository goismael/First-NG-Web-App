import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from "@angular/forms";
import { AboutService } from './services/about.service';
import {ContactService} from './services/contact.service';
import { GalleryComponent } from './gallery/gallery.component'
import { HttpClientModule } from '@angular/common/http';


const routes:Routes=[
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: '', redirectTo:'/about', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule, FormsModule,RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [AboutService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
