import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IUser } from '../../user/models/user.interface';
import { enviroment } from '../../../../enviroments/enviroment'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }

  get<T>(): Observable<T> {
    return this.http
      .get<T>(`${enviroment.apiURL}?results=200&seed=abc`)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  getById<T>(id: number): Observable<T> {
    return this.http
      .get<T>(`${enviroment.apiURL}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError));
  }

  post(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(enviroment.apiURL, user, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError));
  }

  update(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${enviroment.apiURL}?id=${id}`, user, this.httpOptions)
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