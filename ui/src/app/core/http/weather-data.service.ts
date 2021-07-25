import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) { }

  getWeatherData(cityName: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('city', cityName);
    params = params.append('date', 1627236000);

    console.log(params);
    return this.http.get(`${this.apiUrl}/weather`, {params: params})
  }
}