import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Airport} from '../model/airport';
import {Hotel} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }
  getAllAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>('http://localhost:8085/app/airport/all');
  }
  getAirportsInPoland(): Observable<Airport[]> {
    return this.http.get<Airport[]>('http://localhost:8085/app/airport/airportsInPoland');
  }
  getAirportsNotInPoland(): Observable<Airport[]> {
    return this.http.get<Airport[]>('http://localhost:8085/app/airport/airportsNotInPoland');
  }
  delete(id: number): Observable<Object> {
    return this.http.post('http://localhost:8085/app/airport/delete', id);
  }
  save(airport: Airport): Observable<Object> {
    return this.http.post('http://localhost:8085/app/airport/save', airport);
  }
  getAirport(id: number): Observable<Airport> {
    return this.http.get<Airport>('http://localhost:8085/app/airport/getAirport?id=' + id);
  }
}
