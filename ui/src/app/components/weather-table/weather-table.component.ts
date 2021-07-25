import {Component, Input, OnInit} from '@angular/core';
import {WeatherDay} from "../../core/model/weather-day.model";

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html',
  styleUrls: ['./weather-table.component.scss']
})
export class WeatherTableComponent implements OnInit{

  @Input()
  weatherDays: Array<WeatherDay> = new Array<WeatherDay>();
  displayedColumns = ['city', 'countryCode', 'temperature', 'clouds', 'rain']

  constructor() { }

  ngOnInit(): void {
  }

}
