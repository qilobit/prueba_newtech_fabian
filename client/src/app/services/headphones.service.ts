import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headphone } from '../models/headphone.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeadphonesService {
  private readonly RESOURCE_NAME = 'headphones';
  constructor(
    private readonly http: HttpClient
  ) { }

  get(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/${this.RESOURCE_NAME}`);
  }

  create(headphone: Headphone): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${this.RESOURCE_NAME}`, headphone);
  }

  update(headphone: Headphone): Observable<any> {
    return this.http.put(`${environment.apiUrl}/${this.RESOURCE_NAME}/${headphone.id}`, headphone);
  }

  delete(headphone: Headphone): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/${this.RESOURCE_NAME}/${headphone.id}`);
  }

  list(): Headphone[] {
    return [
      { id: '1', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '2', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '3', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '4', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '5', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '6', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '7', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '8', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '9', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '10', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '11', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '12', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '13', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '14', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '15', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '16', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '17', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' },
      { id: '18', editing: false, asin: '', batteiresType: '', dateFirstAvailable: 'None', modelNumber: (Math.random() * 100), weight: '12', manufacturer: '', dimensions: 'ASD' }
    ];
  }
}
