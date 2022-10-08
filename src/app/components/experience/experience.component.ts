import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  edu = [
    {
      time: '2015 - 2020',
      title: 'Academy of Cryptography Techniques',
      description: 'Engineer\'s degree in Information Security.'
    }
  ];

  exp = [
    {
      time: '12/2019 - 04/2020',
      title: 'FPT Software/SGN',
      description: 'Software Engineer (Mobile App)'
    },
    {
      time: '4/2020 - 06/2021',
      title: 'Gonosen International',
      description: 'Software Engineer (Mobile App)'
    },
    {
      time: '6/2021 - Present',
      title: 'FPT Software/UIH',
      description: 'Software Engineer (Web/Desktop App)'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
