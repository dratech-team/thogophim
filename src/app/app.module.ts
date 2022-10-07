import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/components/shared.module";
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ExperienceComponent} from './components/experience/experience.component';
import {BlogComponent} from './components/blog/blog.component';
import {ContactComponent} from './components/contact/contact.component';
import {ProjectComponent} from "./components/project/project.component";

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
    ProjectComponent,
    BlogComponent,
    ContactComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
