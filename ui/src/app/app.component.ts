import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./core/service/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ui';
  weatherDays;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.getWeatherDataObject().subscribe(data => {
      this.weatherDays = data;
    })
  }

  getWeatherData(data: any) {
    const cityName = data.value['cityName'];
    const date = new Date(data.value['date']);

    this.weatherService.getWeatherByCityAndDate(cityName, date);
  }
}
