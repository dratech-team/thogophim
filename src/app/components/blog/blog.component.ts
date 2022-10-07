import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      category: 'The life',
      title: 'Is working at a billion-dollar company as true as a rumor?',
      thumbnail: 'assets/blog/LongTHCOM001.png',
      href: 'https://youtu.be/sWj6HDtAHaU',
      createdAt: '17 Sep, 2022',
      author: '@Thogophim'
    },
    {
      category: 'The life',
      title: 'A day in the life of a Software Engineer FPT Software Quy Nhon, Viet Nam',
      thumbnail: 'assets/blog/LongTHCOM002.png',
      href: 'https://youtu.be/5p_D38whw5g',
      createdAt: '1 Oct, 2022',
      author: '@Thogophim'
    }
  ].sort((a, b) => (new Date(a.createdAt).getDate()  - new Date(b.createdAt).getDate()));

  constructor() {
  }

  ngOnInit(): void {
  }

}
