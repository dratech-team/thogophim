import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, Math.random() * (2000 - 1500) + 2000);
  }

  scroll(element: string) {
    const el = document.getElementById(element);
    console.log(el, element)
    el && el.scrollIntoView();
  }
}
