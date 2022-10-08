import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = [
    {
      category: 'Mobile App',
      title: 'AIA',
      thumbnail: './assets/projects/aia.jpg',
      href: '#'
    },
    {
      category: 'Mobile App',
      title: 'Liberlove',
      thumbnail: './assets/works/6.svg',
      href: '#'
    },
    {
      category: 'Desktop App',
      title: 'EOS Webcam Utility Pro',
      thumbnail: './assets/projects/eos.jpg',
      href: '#'
    },
    {
      category: 'IoT',
      title: 'Yamaha Fintech',
      thumbnail: './assets/projects/yamaha.svg',
      href: '#'
    },
    {
      category: 'Website',
      title: 'Minhdu',
      thumbnail: './assets/works/6.svg',
      href: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
