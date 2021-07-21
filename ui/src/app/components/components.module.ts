import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WeatherTableComponent } from './weather-table/weather-table.component';



@NgModule({
  declarations: [
    SearchFormComponent,
    WeatherTableComponent
  ],
  exports: [
    SearchFormComponent,
    WeatherTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
