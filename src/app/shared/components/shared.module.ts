import {NgModule} from "@angular/core";
import {SplashScreenComponent} from "./splash-screen/splash-screen.component";
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  exports: [
    SplashScreenComponent
  ],
  declarations: [SplashScreenComponent, LoadingComponent]
})
export class SharedModule {

}
