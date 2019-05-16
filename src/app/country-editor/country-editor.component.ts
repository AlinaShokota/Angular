import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CityService} from '../shared/service/city.service';
import {CountryServiceService} from '../shared/service/country-service.service';
import {Location} from '@angular/common';
import {ContinentService} from '../shared/service/continent.service';
import {Country} from '../shared/model/country';
import {Continent} from '../shared/model/continent';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-country-editor',
  templateUrl: './country-editor.component.html',
  styleUrls: ['./country-editor.component.css']
})
export class CountryEditorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private countryService: CountryServiceService, private continentService: ContinentService,
              private location: Location, private http: HttpClient) { }
  country: Country = new Country();
  continents: Continent[] = new Array();
  file: File;
  maxFileSize = 1000 // bytes
  ngOnInit() {
    this.continentService.getAllContinents().subscribe(value => {
      this.continents = value;
    });
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    if (id) {
      this.countryService.getCountry(id).subscribe(value => {
        console.log(value);
        this.country = value;
        this.country.id = id;
      });
    }
  }
  onSave(): void {
    console.log(this.country);
    this.countryService.save(this.country).subscribe(value => {
      window.location.href = '/country-list';
    });
  }
  goBack(): void {
    this.location.back();
  }
  onFileAdd(file: File) {
    this.file = file;
  }

  onFileRemove() {
    this.file = null;
  }

  uploadFiles() {
    const url = 'your-path-to-backend-endpoint'
    const data = new FormData();
    data.append('file', this.file, this.file.name)

    if (this.file.size <= this.maxFileSize) {
      this.http.post(url, data);
    }
  }

}
