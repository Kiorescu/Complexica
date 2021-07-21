import { Injectable } from '@angular/core';
import {OpenWeatherService} from "../http/open-weather.service";
import {WeatherDay} from "../model/weather-day.model";
import {City} from "../model/city.model";
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherData$: Subject<WeatherDay[]> = new BehaviorSubject(undefined);

  constructor(private openWeather: OpenWeatherService) { }

  getWeatherDataObject() {
    return this.weatherData$.asObservable();
  }

  getWeatherByCityAndDate(cityName: string, date: Date) {
    this.openWeather.getFiveDaysWeather(cityName).subscribe(data => {
      let weatherDays:WeatherDay[] = new Array<WeatherDay>();
      let city: City = new City();
      city.country = data.city.country;
      city.id = data.city.id;
      city.name = data.city.name;

      data.list.forEach(row => {
        let weatherDay: WeatherDay = new WeatherDay();
        weatherDay.date = row.dt_txt;
        if(row.rain){
          weatherDay.rain = row.rain['3h'];
        }
        weatherDay.clouds = row.clouds?.all;
        weatherDay.temperature = row.main?.temp;
        weatherDay.city = city;

        weatherDays.push(weatherDay);
      })

      this.weatherData$.next(weatherDays);
    })
  }
}
