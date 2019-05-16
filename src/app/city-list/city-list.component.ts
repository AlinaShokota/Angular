import { Component, OnInit } from '@angular/core';
import {AirportService} from '../shared/service/airport.service';
import {Airport} from '../shared/model/airport';
import {CityService} from '../shared/service/city.service';
import {City} from '../shared/model/city';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  constructor(private cityService: CityService) { }

  cities: City[] = new Array();
  ngOnInit() {
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    console.log(this.cities);
  }
  delete(id: number) {
    this.cityService.delete(id).subscribe(value => {
      window.location.href = '/city-list';
    });
  }

}
