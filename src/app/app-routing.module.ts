import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CountryListComponent} from './country-list/country-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AirportListComponent} from './airport-list/airport-list.component';
const routes: Routes = [
  { path: 'country-list', component: CountryListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'airport-list', component: AirportListComponent }
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
