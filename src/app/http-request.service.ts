import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {DataAdapter} from './model';

@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {

  constructor(private http: HttpClient) {}

  getData(): Observable<DataAdapter[]> {
    return this.http.get("https://api.publicapis.org/categories").pipe(
      map((data: string[]) => {
        return data.map(it => new DataAdapter(it))
      }),
      catchError(error => {
        return throwError('get data error : ', error);
      })
    )
  }
}
