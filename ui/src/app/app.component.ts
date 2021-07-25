import {Component, OnInit} from '@angular/core';
import {WeatherDataService} from "./core/http/weather-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ui';
  weatherDays;

  constructor(private weatherDataService: WeatherDataService) {
  }

  ngOnInit() {
  }

  getWeatherData(data: any) {
    const cityName = data.value['cityName'];
    const date = new Date(data.value['date']);

    this.weatherDataService.getWeatherData(cityName).subscribe(result => {
      if(!this.weatherDays) {
        this.weatherDays = result;
      } else {
        result.forEach(i => this.weatherDays.push(i));
        this.weatherDays = [].concat(this.weatherDays);
      }
    })
  }
}
