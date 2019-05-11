import { Component, OnInit } from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {Trip} from '../shared/model/trip';
import {TripListComponent} from '../trip-list/trip-list.component';
import {Hotel} from '../shared/model/hotel';
import {HttpClient} from '@angular/common/http';
import {HotelService} from '../shared/service/hotel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-one-trip',
  templateUrl: './one-trip.component.html',
  styleUrls: ['./one-trip.component.css']
})
export class OneTripComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute) { }
  trip: Trip = new Trip();
  tripId: number = 0;
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    console.log('id: ' + id);
    if (id) {
      this.tripService.getTripById(id).subscribe(value => {
        console.log(value);
        this.trip = value;
        this.trip.id = id;
      });
    }
  }
}
