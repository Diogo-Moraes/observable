import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeInterval } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppComponentService {
  // private timer$ = new Observable<number>((observer) => {
  //   let contador: number = 0;
  //   console.log('Observable created');
  //   setInterval(() => {
  //     console.log('5 segundos se passaram!');
  //     observer.next(contador);
  //     contador++; // emite um valor para quem está inscrito
  //     // finaliza o Observable
  //   }, 5000);
  // });

  // public getTimer(): Observable<number> {
  //   return this.timer$;
  // }

  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  fetchData(): Observable<JSON> {
    return this.http.get<JSON>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something bad happened; please try again later.');
  }
}
