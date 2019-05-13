import { Component, OnInit } from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {Trip} from '../shared/model/trip';
import {TripListComponent} from '../trip-list/trip-list.component';
import {Hotel} from '../shared/model/hotel';
import {HttpClient} from '@angular/common/http';
import {HotelService} from '../shared/service/hotel.service';
import {ActivatedRoute} from '@angular/router';
import {ImageService} from '../shared/service/image.service';
import {Image} from '../shared/model/image';
import {Airport} from '../shared/model/airport';
import {City} from '../shared/model/city';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute, private imageService: ImageService) { }
  trip: Trip = new Trip();
  tripId: number = 0;
  r: number = 0;
  a: number = 0;
  c: number = 0;
  images: Image[] = new Array();
  ngOnInit() {
    this.trip.airportFrom = new Airport();
    this.trip.airportTo = new Airport();
    this.trip.hotelTo = new Hotel();
    this.trip.cityTo = new City();
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    console.log('id: ' + id);
    if (id) {
      this.tripService.getTripById(id).subscribe(value => {
        console.log(value);
        this.trip = value;
        this.trip.id = id;
      });
      this.imageService.getImagesByTripId(id).subscribe(value => {
        console.log(value);
        this.images = value;
      });
    }
  }
  onClick() {
    this.r = this.a * this.trip.countOfDays * this.trip.priceForAdult + this.c * this.trip.countOfDays * this.trip.priceForChild;
  }
}
