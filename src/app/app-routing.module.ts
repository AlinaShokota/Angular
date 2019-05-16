import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './country-list/country-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AirportListComponent} from './airport-list/airport-list.component';
import {CityListComponent} from './city-list/city-list.component';
import {EuropeListComponent} from './europe-list/europe-list.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {TripListComponent} from './trip-list/trip-list.component';
import {OneTripComponent} from './one-trip/one-trip.component';
import {HotelEditorComponent} from './hotel-editor/hotel-editor.component';
import {TripEditorComponent} from './trip-editor/trip-editor.component';
import {ImageEditorComponent} from './image-editor/image-editor.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {TripsByContinentComponent} from './trips-by-continent/trips-by-continent.component';
import {TripByCountryComponent} from './trip-by-country/trip-by-country.component';
import {AirportEditorComponent} from './airport-editor/airport-editor.component';
import {CityEditorComponent} from './city-editor/city-editor.component';
import {CountryEditorComponent} from './country-editor/country-editor.component';
import {TripSearchComponent} from './trip-search/trip-search.component';
const routes: Routes = [
  { path: 'country-list', component: CountryListComponent },
  { path: 'country-editor/:id', component: CountryEditorComponent },
  { path: 'country-editor', component: CountryEditorComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'airport-list', component: AirportListComponent },
  { path: 'airport-editor/:id', component: AirportEditorComponent },
  { path: 'airport-editor', component: AirportEditorComponent },
  { path: 'city-list', component: CityListComponent },
  { path: 'city-editor/:id', component: CityEditorComponent },
  { path: 'city-editor', component: CityEditorComponent },
  { path: 'europe', component: EuropeListComponent },
  { path: 'hotel-list', component: HotelListComponent },
  { path: 'one-trip/:id', component: OneTripComponent },
  { path: 'hotel-editor', component: HotelEditorComponent },
  { path: 'trip-editor', component: TripEditorComponent },
  { path: 'hotel-editor/:id', component: HotelEditorComponent },
  { path: 'trip-search/:countOfDays', component: TripSearchComponent },
  { path: 'trip-search', component: TripSearchComponent },
  { path: 'image-editor', component: ImageEditorComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'trips-by-continent/:continentName', component: TripsByContinentComponent},
  { path: 'trips-by-country/:name', component: TripByCountryComponent},
  { path: '', component: TripListComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
