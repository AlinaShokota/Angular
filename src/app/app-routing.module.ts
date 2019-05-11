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
const routes: Routes = [
  { path: 'country-list', component: CountryListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'airport-list', component: AirportListComponent },
  { path: 'city-list', component: CityListComponent },
  { path: 'europe', component: EuropeListComponent },
  { path: 'hotel-list', component: HotelListComponent },
  { path: 'one-trip/:id', component: OneTripComponent },
  { path: 'hotel-editor', component: HotelEditorComponent },
  { path: 'hotel-editor/:id', component: HotelEditorComponent },
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
