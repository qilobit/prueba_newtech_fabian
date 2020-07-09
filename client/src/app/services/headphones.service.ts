import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headphone } from '../models/headphone.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeadphonesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  get(): Observable<Headphone[]> {
    return this.http.get(`${environment.apiUrl}/headphone`)
      .pipe(
        map((response: any) => {
          return Array.from(response.data).map(obj => new Headphone(obj));
        })
      );
  }

  create(headphone: Headphone): Observable<any> {
    return this.http.post(`${environment.apiUrl}/headphone`, headphone);
  }

  update(headphone: Headphone): Observable<any> {
    return this.http.put(`${environment.apiUrl}/headphone/${headphone.id}`, headphone);
  }

  delete(headphone: Headphone): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/headphone/${headphone.id}`);
  }
}
