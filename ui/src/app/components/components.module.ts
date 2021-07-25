import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFormComponent } from './search-form/search-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WeatherTableComponent } from './weather-table/weather-table.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";



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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
