import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {CityService} from '../shared/service/city.service';
import {AirportService} from '../shared/service/airport.service';
import {City} from '../shared/model/city';
import {Airport} from '../shared/model/airport';

@Component({
  selector: 'app-airport-editor',
  templateUrl: './airport-editor.component.html',
  styleUrls: ['./airport-editor.component.css']
})
export class AirportEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cityService: CityService, private airportService: AirportService,
              private location: Location) { }
  cities: City[] = new Array();
  airport: Airport = new Airport();
  ngOnInit() {
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    console.log('id: ' + id);
    if (id) {
      this.airportService.getAirport(id).subscribe(value => {
        console.log(value);
        this.airport = value;
        this.airport.id = id;
      });
    }
  }
  onSave(): void {
    console.log(this.airport);
    this.airportService.save(this.airport).subscribe(value => {
      window.location.href = '/airport-list';
    });
  }
  goBack(): void {
    this.location.back();
  }

}
