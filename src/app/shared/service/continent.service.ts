import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../model/city';
import {Continent} from '../model/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  constructor(private http: HttpClient) { }
  getAllContinents(): Observable<Continent[]> {
    return this.http.get<Continent[]>('http://localhost:8085/app/continent/all');
  }
}
