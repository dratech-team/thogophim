import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/components/shared.module";
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  imports: [
    NzLayoutModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
