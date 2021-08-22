import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_KEY = "986f23ae0447c649c36930c44d073083"
  units = 'imperial'
  constructor(private Http: HttpClient) { }

  getData(country:string, province:string, city:string) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${province},${country}&units=${this.units}&appid=${this.API_KEY}`
    return this.Http.get(url);

  }
  setMetric(units: string) {
    console.log(units)
    if (units === "metric") {
      this.units = 'metric'
    }
   else if (units === 'imperial') {
      this.units = 'imperial'
    }
  }
  
  getMetric(): string {
    return this.units
  }
}

