import { Component, OnInit } from '@angular/core';
import {Country} from '../shared/model/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor() { }

  countries: Country[] = new Array();
  ngOnInit() {
    const country: Country = new Country();
    country.id = 1;
    country.name = 'Poland';
    country.continentId = 70;
    this.countries[0] = country;
    console.log(this.countries);
  }

}
