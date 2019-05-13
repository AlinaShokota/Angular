import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryListComponent } from './country-list/country-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import {CountryServiceService} from './shared/service/country-service.service';
import {HttpClientModule} from '@angular/common/http';
import { AirportListComponent } from './airport-list/airport-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { EuropeListComponent } from './europe-list/europe-list.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { TripListComponent } from './trip-list/trip-list.component';
import {FormsModule} from '@angular/forms';
import { OneTripComponent } from './one-trip/one-trip.component';
import { HotelEditorComponent } from './hotel-editor/hotel-editor.component';
import { TripEditorComponent } from './trip-editor/trip-editor.component';
import {NgbModule, NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { ImageEditorComponent } from './image-editor/image-editor.component';
import { TripsByContinentComponent } from './trips-by-continent/trips-by-continent.component';
import {DestinationsComponent} from './destinations/destinations.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    DashboardComponent,
    AirportListComponent,
    CityListComponent,
    EuropeListComponent,
    HotelListComponent,
    TripListComponent,
    OneTripComponent,
    HotelEditorComponent,
    TripEditorComponent,
    ImageEditorComponent,
    DestinationsComponent,
    TripsByContinentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [CountryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
