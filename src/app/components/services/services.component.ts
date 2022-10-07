import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      icon: 'assets/service-1.svg',
      bg: 'rgb(108, 108, 229)',
      shadow: 'shadow-blue',
      title: "UI/UX design",
      description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    },
    {
      icon: 'assets/service-2.svg',
      bg: '#F9D74C',
      shadow: 'shadow-yellow',
      title: "Web/Mobile Development",
      description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    },
    {
      icon: 'assets/service-3.svg',
      bg: 'rgb(249, 123, 139)',
      shadow: 'shadow-pink',
      title: "Video Editor",
      description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
