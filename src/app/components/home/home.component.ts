import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  majors = ['Front-End Developer', 'Back-End Developer', 'Youtuber'];

  constructor() {
  }

  ngOnInit(): void {

  }

}
