import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  majors = ['UI/UX Designer', 'Web/Mobile Developer', 'Youtuber'];
  major = this.majors[0];

  constructor() {
  }

  ngOnInit(): void {
    let i = 1;
    setInterval(() => {
      this.major = this.majors[i];
      i += 1;
      if (i === this.majors.length) {
        i = 0;
      }
    }, 8000);
  }
}
