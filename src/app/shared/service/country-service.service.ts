import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';
import {City} from '../model/city';

@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  constructor(private http: HttpClient) { }
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/all');
  }
  getAllEurope(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/europe');
  }
  delete(id: number): Observable<Object> {
    return this.http.post('http://localhost:8085/app/country/delete', id);
  }
  save(country: Country): Observable<Object> {
    return this.http.post('http://localhost:8085/app/country/save', country);
  }
  getCountry(id: number): Observable<Country> {
    return this.http.get<Country>('http://localhost:8085/app/city/getCountry?id=' + id);
  }
}
