import { Component } from '@angular/core';
import { NewsInterface } from '../models/news.interface';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent {

  news: NewsInterface = {
    id: 1,
    title: 'Aide pour l\'humanité',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots piece of classical Latin literature.',
    picture: '../../assets/images/home_1.png',
    createdAt: '23/02/2024 12:12',
  };
}
