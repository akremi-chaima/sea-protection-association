import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NewsInterface } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  /**
   * Get news
   */
  get(): Observable<Array<NewsInterface>> {
    return this.apiService.get<Array<NewsInterface>>('news');
  }
}
