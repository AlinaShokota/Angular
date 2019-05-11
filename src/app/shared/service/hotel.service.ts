import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Airport} from '../model/airport';
import {Hotel} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('http://localhost:8085/app/hotel/all');
  }
  save(hotel: Hotel): Observable<Object> {
    return this.http.post('http://localhost:8085/app/hotel/save', hotel);
  }
  getHotel(id: number): Observable<Hotel> {
    return this.http.get<Hotel>('http://localhost:8085/app/hotel/getHotel?id=' + id);
  }
}
