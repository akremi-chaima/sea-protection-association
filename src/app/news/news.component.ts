import {Component, Input, OnInit} from '@angular/core';
import { NewsInterface } from '../models/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  newsNumber: number;

  news: Array<NewsInterface> = [];
  selectedNews: NewsInterface | null = null;

  ngOnInit() {
    this.news = [
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      },
      {
        id: 1,
        title: 'Aide pour l\'humanité',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
        picture: '../../assets/images/marine.jpeg',
        createdAt: '23/02/2024 12:12',
      }
    ];
  }

  setSelectedNews(news: NewsInterface) {
    this.selectedNews = news;
  }
}
