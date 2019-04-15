import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:8085/app/city/all');
  }
}