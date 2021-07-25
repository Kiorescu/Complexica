import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) { }

  save(itinerary) {
    return this.http.post(`${this.apiUrl}/itinerary`, itinerary);
  }

  getAll() {
    return this.http.get(`${this.apiUrl}/itinerary`);
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/itinerary/${id}`)
  }
}
