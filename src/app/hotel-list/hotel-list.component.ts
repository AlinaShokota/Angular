import { Component, OnInit } from '@angular/core';
import {HotelService} from '../shared/service/hotel.service';
import {Hotel} from '../shared/model/hotel';
import {CityService} from '../shared/service/city.service';
import {City} from '../shared/model/city';
import {HotelFeedback} from '../shared/feedBackModel/hotel-feedback';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
model: HotelFeedback = {
  name: '',
  standard: '',
  city: '',
  description: '',
};
  constructor(private hotelService: HotelService, private cityService: CityService) { }

  hotels: Hotel[] = new Array();
  cities: City[] = new Array();
  ngOnInit() {

    this.hotelService.getAllHotels().subscribe(value => {
      console.log("oninit");
      this.hotels = value;
    });
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    console.log(this.hotels);
  }
}
