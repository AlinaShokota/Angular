import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Airport} from '../model/airport';

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
}
