import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../shared/service/city.service';
import {AirportService} from '../shared/service/airport.service';
import {Location} from '@angular/common';
import {CountryServiceService} from '../shared/service/country-service.service';
import {City} from '../shared/model/city';
import {Country} from '../shared/model/country';

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.css']
})
export class CityEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cityService: CityService, private countryService: CountryServiceService,
              private location: Location) {
  }

  city: City = new City();
  countries: Country[] = new Array();

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(value => {
      this.countries = value;
    });
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    console.log('id: ' + id);
    if (id) {
      this.cityService.getCity(id).subscribe(value => {
        console.log(value);
        this.city = value;
        this.city.id = id;
      });
    }
  }
  onSave(): void {
    console.log(this.city);
    this.cityService.save(this.city).subscribe(value => {
      window.location.href = '/city-list';
    });
  }
  goBack(): void {
    this.location.back();
  }

}
