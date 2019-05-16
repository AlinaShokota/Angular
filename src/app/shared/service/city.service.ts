import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city';
import {Airport} from '../model/airport';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8085/app/city/all');
  }
  getAllCitiesInPoland(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8085/app/city/in-Poland');
  }
  delete(id: number): Observable<Object> {
    return this.http.post('http://localhost:8085/app/city/delete', id);
  }
  save(city: City): Observable<Object> {
    return this.http.post('http://localhost:8085/app/city/save', city);
  }
  getCity(id: number): Observable<City> {
    return this.http.get<City>('http://localhost:8085/app/city/getCity?id=' + id);
  }
}
