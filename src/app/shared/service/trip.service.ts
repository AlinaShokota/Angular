import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';
import {Trip} from '../model/trip';
import {Hotel} from '../model/hotel';
import {City} from '../model/city';

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
  getTripsByContinent(continentName: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByContinent?continentName=' + continentName);
  }
  getTripsByCountry(name: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByCountry?name=' + name);
  }
  getTripById(id: number): Observable<Trip> {
    return this.http.get<Trip>('http://localhost:8085/app/trip/getById?id=' + id);  }
  save(trip: Trip): Observable<Object> {
    return this.http.post('http://localhost:8085/app/trip/save', trip);
  }
  getTripsByCountOfDays(countOfDays: number): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByCountOfDays?countOfDays=' + countOfDays);
  }
  getTripsByAirportFromCity(name: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByAirportFromCity?name=' + name);
  }
  getTripsByAirportToCity(name: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByAirportToCity?name=' + name);
  }
  getTripsByDepartureDate(departureDate: string): Observable<Trip[]> {
    return this.http.get<Trip[]>('http://localhost:8085/app/trip/findByDepartureDate?departureDate=' + departureDate);
  }
}
