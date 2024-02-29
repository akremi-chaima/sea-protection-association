import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { EventInterface } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private apiService: ApiService) {}

  /**
   * Save events
   */
  get(): Observable<Array<EventInterface>> {
    return this.apiService.get<Array<EventInterface>>('events');
  }
}
