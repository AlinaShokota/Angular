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
    return this.http.get<Country[]>('http://localhost:8888/user/all');
  }
}
