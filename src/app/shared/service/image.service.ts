import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from '../model/hotel';
import {Image} from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImagesByTripId(id: number): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:8085/app/image/allByTripId?id=' + id);
  }
  getAllImages(): Observable<Image[]> {
    return this.http.get<Image[]>('http://localhost:8085/app/image/all');
  }
  save(image: Image): Observable<Object> {
    return this.http.post('http://localhost:8085/app/image/save', image);
  }
  saveAll(images: Image[]): Observable<Image[]> {
    return this.http.post<Image[]>('http://localhost:8085/app/image/saveAll', images);
  }
}
