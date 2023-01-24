/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { enviroment } from '../../../../enviroments/enviroment';
import { HttpOtions } from '../models/http-params.interface';
import { getFullUrl } from '../utils/handle-url';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, options: HttpOtions): Observable<any> {
    const fullUrl = getFullUrl(url);

    const httpOptions = this.createOptions(options);

    return this.http
      .get<T>(fullUrl, httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  post<T>(data: T): Observable<any> {
    return this.http.post<T>(enviroment.apiURL, data)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  update<T>(data: T): Observable<any> {
    return this.http.put<T>(enviroment.apiURL, data)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  createOptions(options: HttpOtions) {
    return {
      headers: options.headers,
      params: options.params,
      responseType: 'json' as const,
      observe: 'response' as const,
    };
  }

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => {
      return 'Something bad happened; please try again later.';
    });
  }

}