import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/components/shared.module";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {NzMenuModule} from "ng-zorro-antd/menu";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { WorkComponent } from './components/work/work.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  imports: [
    NzLayoutModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ExperienceComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
