import { Component, OnInit } from '@angular/core';
import {Country} from '../shared/model/country';
import {CountryServiceService} from '../shared/service/country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: CountryServiceService) { }

  countries: Country[] = new Array();
  ngOnInit() {
    this.countryService.getAllCountries().subscribe(value => {
      this.countries = value;
    });
    console.log(this.countries);
  }
  delete(id: number) {
    this.countryService.delete(id).subscribe(value => {
      window.location.href = '/country-list';
    });
  }

}
