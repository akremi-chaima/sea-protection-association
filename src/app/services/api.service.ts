import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  apiURL: string;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {
    this.apiURL = environment.apiUrl + 'api/';
  }

  /**
   * Get generic method.
   * @param route (endpoint)
   */
  public get<T>(route: string) {
    return this.http.get<T>(`${this.apiURL}${route}`, this.headers());
  }

  /**
   * Post generic method.
   * @param route (endpoint)
   * @param object (json)
   */
  public post<T>(route: string, object: object): Observable<T> {
    return this.http.post<T>(`${this.apiURL}${route}`, object, this.headers());
  }

  /**
   * Put generic method.
   * @param route (endpoint)
   * @param object (json)
   */
  public put<T>(route: string, object: object): Observable<T> {
    return this.http.put<T>(`${this.apiURL}${route}`, object, this.headers());
  }

  /**
   * Delete generic method.
   * @param route (endpoint)
   */
  public delete<T>(route: string): Observable<T> {
    return this.http.delete<T>(`${this.apiURL}${route}`, this.headers());
  }

  /**
   * Post file.
   * @param route
   * @param formData
   */
  public postFile<T>(route: string, formData: FormData): Observable<T> {
    const options = {
      headers: {
        'Accept': 'application/json',
        Authorization: 'Bearer ' + this.localStorageService.getToken().token
      }
    };

    return this.http.post<any>(`${this.apiURL}${route}`, formData, options);
  }


  /**
   * Builds and returns the headers according to the state of the user
   * (authenticated = we add his token to headers)
   */
  private headers() {
    const options = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (this.localStorageService.getToken() != null) {
      options.headers['Authorization'] = 'Bearer ' + this.localStorageService.getToken().token;
    }

    return options;
  }

}
