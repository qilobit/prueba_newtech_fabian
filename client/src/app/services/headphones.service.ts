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

  get(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/headphone`);
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

  list(): Headphone[] {
    return [
      { id: '1', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '2', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '3', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '4', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '5', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '6', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '7', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '8', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '9', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '10', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '11', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '12', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '13', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '14', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '15', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '16', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '17', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' },
      { id: '18', editing: false, asin: '', batteries_type: '', date_first_available: 'None', item_model_number: (Math.random() * 100), item_weight: '12', manufacturer: '', product_dimensions: 'ASD' }
    ];
  }
}
