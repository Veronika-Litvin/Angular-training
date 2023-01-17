import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'https://randomuser.me/api/?results=100';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  get<T>(): Observable<T> {
    return this.http
      .get<T>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError));
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