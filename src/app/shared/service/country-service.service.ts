import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../model/country';

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
  getAsia(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/asia');
  }
  getAfrica(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/getAfrica');
  }
  getNorthAmerica(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/north-america');
  }
  getSouthAmerica(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/south-america');
  }
  getAustralia(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:8085/app/country/australia');
  }
}
