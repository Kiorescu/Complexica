import {Component, Input, OnInit} from '@angular/core';
import {WeatherDay} from "../../core/model/weather-day.model";

@Component({
  selector: 'app-weather-table',
  templateUrl: './weather-table.component.html'
})
export class WeatherTableComponent implements OnInit {

  @Input()
  weatherDays: Array<WeatherDay> = new Array<WeatherDay>();

  constructor() { }

  ngOnInit(): void {
  }

}
