import { Component, OnInit } from '@angular/core';
import {CountryServiceService} from '../shared/service/country-service.service';
import {Country} from '../shared/model/country';

@Component({
  selector: 'app-europe-list',
  templateUrl: './europe-list.component.html',
  styleUrls: ['./europe-list.component.css']
})
export class EuropeListComponent implements OnInit {

  constructor(private countryService: CountryServiceService) { }

  countries: Country[] = new Array();
  ngOnInit() {
    this.countryService.getAllEurope().subscribe(value => {
      this.countries = value;
    });
    console.log(this.countries);
  }

}
