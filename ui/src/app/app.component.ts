import { Component } from '@angular/core';
import {WeatherService} from "./core/service/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ui';

  constructor(private weatherService: WeatherService) {
  }

  getWeatherData(data: any) {
    const cityName = data.value['cityName'];
    const date = data.value['date'];

    this.weatherService.getWeatherByCityAndDate(cityName, date);
  }
}
