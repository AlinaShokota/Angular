import { Component, OnInit } from '@angular/core';
import {HotelService} from '../shared/service/hotel.service';
import {CityService} from '../shared/service/city.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {AirportService} from '../shared/service/airport.service';
import {City} from '../shared/model/city';
import {Airport} from '../shared/model/airport';
import {Hotel} from '../shared/model/hotel';
import {Trip} from '../shared/model/trip';
import {TripService} from '../shared/service/trip.service';
import {ImageService} from '../shared/service/image.service';
import {Image} from '../shared/model/image';

@Component({
  selector: 'app-trip-editor',
  templateUrl: './trip-editor.component.html',
  styleUrls: ['./trip-editor.component.css']
})
export class TripEditorComponent implements OnInit {

  constructor(private airportService: AirportService, private hotelService: HotelService, private cityService: CityService,
              private route: ActivatedRoute, private location: Location, private tripService: TripService,) { }
  cities: City[] = new Array();
  airports: Airport[] = new Array();
  airportsInPoland: Airport[] = new Array();
  airportsNotInPoland: Airport[] = new Array();
  hotels: Hotel[] = new Array();
  trip: Trip = new Trip();
  ngOnInit() {
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    this.airportService.getAllAirports().subscribe(value => {
      this.airports = value;
    });
    this.airportService.getAirportsInPoland().subscribe(value => {
      this.airportsInPoland = value;
    });
    this.airportService.getAirportsNotInPoland().subscribe(value => {
      this.airportsNotInPoland = value;
    });
    this.hotelService.getAllHotels().subscribe(value => {
      this.hotels = value;
    });
  }
  onSave(): void {
    console.log(this.trip);
    this.tripService.save(this.trip).subscribe(value => {
      window.location.href = '/image-editor';
    });
    //  alert(this.hotel.name + ' was added to DataBase');

  }
  goBack(): void {
    this.location.back();
  }

  onClick() {
    this.hotelService.getByCityId(this.trip.cityTo).subscribe(value => {
      this.hotels = value;
    });
  }

}
