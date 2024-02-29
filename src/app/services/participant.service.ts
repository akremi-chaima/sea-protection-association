import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ParticipantInterface } from '../models/participant.interface';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  constructor(private apiService: ApiService) {}

  /**
   * Save participant
   */
  save(participant: ParticipantInterface): Observable<any> {
    return this.apiService.post<any>('participant', participant);
  }
}
