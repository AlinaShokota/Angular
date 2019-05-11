import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';
import {Trip} from '../model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }
  getAllTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/all');
  }
  getAllPromotion(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/promotion');
  }
  getNearestTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/nearest');
  }
  getTripsEurope(): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/europe');
  }
  getTripById(id: number): Observable<Trip> {
    return this.http.get<Trip>('http://localhost:8085/app/trip/getById?id=' + id);  }
}
