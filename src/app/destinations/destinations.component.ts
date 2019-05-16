import {Component, OnInit} from '@angular/core';
import {TripService} from '../shared/service/trip.service';
import {Trip} from '../shared/model/trip';
import {ActivatedRoute} from '@angular/router';
import {ContinentService} from '../shared/service/continent.service';
import {Continent} from '../shared/model/continent';
import {CountryServiceService} from '../shared/service/country-service.service';
import {Country} from '../shared/model/country';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private tripService: TripService, private route: ActivatedRoute, private continentService: ContinentService,
              private countryService: CountryServiceService) {
  }

  trips: Trip[] = new Array();
  countries: Country[]=new Array();
  continentName: string = '';
  ngOnInit() {
    this.tripService.getAllTrips().subscribe(value => {
      console.log(value);
      this.trips = value;
    });
    this.countryService.getAllCountries().subscribe(value => {
      console.log(value);
      this.countries = value;
    });
  }

  onClick() {
      this.tripService.getTripsByContinent(this.continentName).subscribe(value => {
        console.log(value);
        this.trips = value;
      });
    }
}
