import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);

  private get baseUrl(): string {
    return environment.apiBaseUrl;
  }

  get<T>(
    path: string,
    options?: {
      params?: HttpParams | { [param: string]: string | number | boolean };
      headers?: any;
    }
  ): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${path}`, options);
  }

  post<T>(
    path: string,
    body: any,
    options?: {
      params?: HttpParams | { [param: string]: string | number | boolean };
      headers?: any;
    }
  ): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${path}`, body, options);
  }

  patch<T>(
    path: string,
    body: any,
    options?: {
      params?: HttpParams | { [param: string]: string | number | boolean };
      headers?: any;
    }
  ): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}${path}`, body, options);
  }

  delete<T>(
    path: string,
    options?: {
      params?: HttpParams | { [param: string]: string | number | boolean };
      headers?: any;
    }
  ): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${path}`, options);
  }
}
