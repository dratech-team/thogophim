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
      color: '#F8F9E8',
      shadow: 'shadow-blue',
      title: "UI/UX design",
      description: 'I have experience using Figma to design apps that give the best user experience.',
    },
    {
      icon: 'assets/service-2.svg',
      bg: '#F9D74C',
      color: '#5E5C77',
      shadow: 'shadow-yellow',
      title: "Web/Mobile Development",
      description: ' I have rich experience in website/mobile application design and building and customization.',
    },
    {
      icon: 'assets/service-3.svg',
      bg: 'rgb(249, 123, 139)',
      color: '#F8F9E8',
      shadow: 'shadow-pink',
      title: "Video Editor",
      description: 'Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
