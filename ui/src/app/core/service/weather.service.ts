import { Injectable } from '@angular/core';
import {OpenWeatherService} from "../http/open-weather.service";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private openWeather: OpenWeatherService) { }

  getWeatherByCityAndDate(cityName: string, date: Date) {
    let weatherData: any;
    this.openWeather.getFiveDaysWeather(cityName).subscribe(result => {
      weatherData = result;
    })
  }
}
