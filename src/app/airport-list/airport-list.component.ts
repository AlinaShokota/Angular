import { Component, OnInit } from '@angular/core';
import {AirportService} from '../shared/service/airport.service';
import {Airport} from '../shared/model/airport';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {

  constructor(private airportService: AirportService) { }

  airports: Airport[] = new Array();
  ngOnInit() {
    this.airportService.getAllAirports().subscribe(value => {
      this.airports = value;
    });
    console.log(this.airports);
  }
  delete(id: number) {
    this.airportService.delete(id).subscribe(value => {
      window.location.href = '/airport-list';
    });
  }

}
