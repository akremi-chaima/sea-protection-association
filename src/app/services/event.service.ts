import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { EventInterface } from '../models/event.interface';
import { HandleEventInterface } from '../models/handle-event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private apiService: ApiService) {}

  /**
   * Get events
   */
  get(): Observable<Array<EventInterface>> {
    return this.apiService.get<Array<EventInterface>>('events');
  }

  /**
   * Save event
   */
  save(event: HandleEventInterface): Observable<any> {
    return this.apiService.post<any>('private/event', event);
  }

  /**
   * Update event
   */
  update(event: HandleEventInterface): Observable<any> {
    return this.apiService.put<any>('private/event', event);
  }

  /**
   * Delete event
   */
  delete(eventId: number): Observable<any> {
    return this.apiService.delete<any>('private/event/' + eventId);
  }

  /**
   * Get event by id
   */
  getOneById(eventId: number): Observable<EventInterface> {
    return this.apiService.get<EventInterface>('private/event/' + eventId);
  }
}
