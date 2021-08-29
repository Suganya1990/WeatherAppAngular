import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  API_KEY = '986f23ae0447c649c36930c44d073083';
  url: string = '';
  units: string = 'imperial';

  constructor(private Http: HttpClient) {}
  setLocation = (country: string, province: string, city: string) => {
    this.url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${province},${country}&units=${this.units}&appid=${this.API_KEY}`;
  };
  setMetric(unit: string) {
    this.units = unit;
  }

  getMetric() {
    return this.units;
  }
  getData() {
    return this.Http.get(this.url);
  }
}
