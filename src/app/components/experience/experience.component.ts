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
      description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
    }
  ];

  exp = [
    {
      time: '12/2019 - 04/2020',
      title: 'FPT Software/SGN',
      position: 'Trainee',
      description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
    },
    {
      time: '4/2020 - 06/2021',
      title: 'Gonosen International',
      position: 'Flutter Developer',
      description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
    },
    {
      time: '6/2021 - Present',
      title: 'FPT Software/UIH',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
