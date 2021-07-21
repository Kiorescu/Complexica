import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Units} from "../enum/units.enum";

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private static readonly API_KEY = 'db11def693ca5cb6d6bf9cae7d225f2f';

  constructor(private http: HttpClient) { }

  getFiveDaysWeather(cityName: string): Observable<any> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${OpenWeatherService.API_KEY}&units=${Units.METRIC}`)
  }
}
