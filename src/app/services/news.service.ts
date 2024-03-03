import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { NewsInterface } from '../models/news.interface';
import { HandleNewsInterface } from '../models/handle-news.interface';

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

  /**
   * Save news
   */
  save(news: HandleNewsInterface): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', news.picture, news.picture.name);
    formData.append('title', news.title);
    formData.append('description', news.description);
    return this.apiService.postFile('private/news', formData);
  }

  /**
   * Update news
   */
  update(news: HandleNewsInterface): Observable<any> {
    const formData: FormData = new FormData();
    if (news.picture) {
      formData.append('file', news.picture, news.picture.name);
    } else {
      formData.append('file', null);
    }
    // @ts-ignore
    formData.append('id', news.id);
    formData.append('title', news.title);
    formData.append('description', news.description);
    return this.apiService.postFile('private/update/news', formData);
  }

  /**
   * Delete news
   */
  delete(eventId: number): Observable<any> {
    return this.apiService.delete<any>('private/news/' + eventId);
  }

  /**
   * Get news by id
   */
  getOneById(eventId: number): Observable<NewsInterface> {
    return this.apiService.get<NewsInterface>('private/news/' + eventId);
  }
}
