import { Component, Input, OnInit } from '@angular/core';
import { NewsInterface } from '../models/news.interface';
import { NewsService } from '../services/news.service';
import { environment } from '../../environments/environment';

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
  environment = environment

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.news = [];
    this.newsService.get().subscribe(news => {
      this.news = news;
    });
  }

  setSelectedNews(news: NewsInterface) {
    this.selectedNews = news;
  }
}
