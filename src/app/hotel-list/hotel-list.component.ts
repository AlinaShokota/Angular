import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {HotelService} from '../shared/service/hotel.service';
import {Hotel} from '../shared/model/hotel';
import {CityService} from '../shared/service/city.service';
import {City} from '../shared/model/city';
import {HotelFeedback} from '../shared/feedBackModel/hotel-feedback';
import {HttpClient} from '@angular/common/http';
import {MdbTableDirective} from 'angular-bootstrap-md';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  constructor(private hotelService: HotelService, private cityService: CityService) {
  }

  hotels: Hotel[] = new Array();
  cities: City[] = new Array();


  ngOnInit() {
    this.hotelService.getAllHotels().subscribe(value => {
      this.hotels = value;
    });
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    console.log(this.hotels);
  }

  delete(id: number) {
    this.hotelService.delete(id).subscribe(value => {
      window.location.href = '/hotel-list';
    });
  }

}
