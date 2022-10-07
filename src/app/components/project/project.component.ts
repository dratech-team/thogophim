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
      href: '#'
    },
    {
      category: 'Mobile App',
      title: 'Liberlove',
      href: '#'
    },
    {
      category: 'Desktop App',
      title: 'EOS Webcam Utility Pro',
      href: '#'
    },
    {
      category: 'IoT',
      title: 'Yamaha Fintech',
      href: '#'
    },
    {
      category: 'Website',
      title: 'Minhdu',
      href: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
