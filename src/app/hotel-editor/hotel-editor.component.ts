import { Component, OnInit } from '@angular/core';
import {Hotel} from '../shared/model/hotel';
import {Location} from '@angular/common';
import {HotelService} from '../shared/service/hotel.service';
import {City} from '../shared/model/city';
import {CityService} from '../shared/service/city.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hotel-editor',
  templateUrl: './hotel-editor.component.html',
  styleUrls: ['./hotel-editor.component.css']
})
export class HotelEditorComponent implements OnInit {

  constructor(private hotelService: HotelService, private cityService: CityService, private route: ActivatedRoute,
              private location: Location) { }

  hotel: Hotel = new Hotel();
  cities: City[] = new Array();
  ngOnInit() {
    this.cityService.getAllCities().subscribe(value => {
      this.cities = value;
    });
    const idParam = this.route.snapshot.paramMap.get('id');
    const id: number = parseInt(idParam, 10);
    console.log('id: ' + id);
    if (id) {
      this.hotelService.getHotel(id).subscribe(value => {
        console.log(value);
        this.hotel = value;
        this.hotel.id = id;
      });
    }
  }
  onSave(): void {
    console.log(this.hotel);
    this.hotelService.save(this.hotel).subscribe(value => {
      window.location.href = '/hotel-list';
    });
  }
  goBack(): void {
    this.location.back();
  }

}
