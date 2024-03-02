import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoginResponseInterface } from '../models/login-response.interface';
import { LoginInterface } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  /**
   * Get user token
   * @param data
   */
  login(data: LoginInterface): Observable<LoginResponseInterface> {
    return this.apiService.post<LoginResponseInterface>('login', data);
  }

  /**
   * Update user password
   * @param data
   */
  updatePassword(data: object): Observable<any> {
    return this.apiService.put<any>('private/update/password', data);
  }

  /**
   * Reset user password
   * @param email
   */
  resetPassword(email: string): Observable<any> {
    return this.apiService.get<any>('reset/password/' + email);
  }
}
