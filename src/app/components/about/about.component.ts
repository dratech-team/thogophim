import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about = 'I am Long, Senior Software Engineer from Quy Nhon, Viet Nam. I have rich experience in website/mobile application design and building and customization.';
  factItems = [
    {
      icon: 'icon-fire',
      title: 'Projects completed',
      count: '100+',
    },
    {
      icon: 'icon-cup',
      title: 'Cup of coffee',
      count: 5670,
    },
    {
      icon: 'icon-people',
      title: 'Satisfied clients',
      count: 427,
    },
    {
      icon: 'icon-badge',
      title: 'Nominees winner',
      count: 35,
    },

  ];
  skills = [
    {
      title: 'Development',
      value: 80
    },
    {
      title: 'Development',
      value: 80
    },
    {
      title: 'Development',
      value: 80
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
