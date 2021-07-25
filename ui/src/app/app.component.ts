import {Component, OnInit} from '@angular/core';
import {WeatherDataService} from "./core/http/weather-data.service";
import {ItineraryService} from "./core/http/itinerary.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WeatherDay} from "./core/model/weather-day.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ui';
  weatherDays;
  itineraryName;
  itineraries: any

  constructor(private weatherDataService: WeatherDataService,
              private itineraryService: ItineraryService,
              protected _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.itineraryService.getAll().subscribe(result => {
      this.itineraries = result;
    })
  }

  getWeatherData(data: any) {
    const cityName = data.value['cityName'];
    const date = new Date(data.value['date']).getTime();

    this.weatherDataService.getWeatherData(cityName, date).subscribe(result => {
      if(!this.weatherDays) {
        this.weatherDays = result;
      } else {
        result.forEach(i => this.weatherDays.push(i));
        this.weatherDays = [].concat(this.weatherDays);
      }
    })
  }

  save() {
    if(!this.itineraryName || this.itineraryName === "") {
      this._snackBar.open("Please write a name for itinerary")
    } else {
      this.itineraryService.save({name: this.itineraryName, data: this.weatherDays}).subscribe(result => {
        this.itineraries.push(result);
        this._snackBar.open("Itinerary saved")
      })
    }
  }

  load(id: number) {
    this.itineraryService.getById(id).subscribe((result: any) => {
      this.weatherDays = result.data;
    })
  }

}
