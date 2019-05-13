import { Component, OnInit } from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {Trip} from '../shared/model/trip';
import {Airport} from '../shared/model/airport';
import {AirportService} from '../shared/service/airport.service';
import {CityService} from '../shared/service/city.service';
import {City} from '../shared/model/city';
import {CountryServiceService} from '../shared/service/country-service.service';
import {Country} from '../shared/model/country';
import {Continent} from '../shared/model/continent';
import {ContinentService} from '../shared/service/continent.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  constructor(private tripService: TripService, private http: HttpClient, private countryService: CountryServiceService, private airportService: AirportService, private cityService: CityService, private continentService: ContinentService) { }

  trips: Trip[] = new Array();
  promotionTrips: Trip[] = new Array();
  nearestTrips: Trip[] = new Array();
  airports: Airport[] = new Array();
  airportsInPoland: Airport[] = new Array();
  cities: City[] = new Array();
  citiesInPoland: City[] = new Array();
  countriesEurope: Country[] = new Array();
  countriesAsia: Country[] = new Array();
  continents: Continent[] = new Array();

  ngOnInit() {
    this.tripService.getAllTrips().subscribe(value => {
      this.trips = value;
    });
    this.tripService.getAllPromotion().subscribe(value => {
      this.promotionTrips = value;
    });
    this.tripService.getNearestTrips().subscribe(value => {
      this.nearestTrips = value;
    });

    this.airportService.getAllAirports().subscribe(value => {
      this.airports = value;
    });
    this.airportService.getAirportsInPoland().subscribe(value => {
      this.airportsInPoland = value;
    });
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    this.cityService.getAllCitiesInPoland().subscribe(value => {
      this.citiesInPoland = value;
    });
    this.countryService.getAllEurope().subscribe(value => {
      this.countriesEurope = value;
    });
    this.countryService.getAsia().subscribe(value => {
      this.countriesAsia = value;
    });
    this.continentService.getAllContinents().subscribe(value => {
      this.continents = value;
    });
    console.log(this.trips);
  }

}

