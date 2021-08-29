import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from '../weather.service';
import {
  faWind,
  faMapMarker,
  faCircle,
  faTemperatureLow,
  faTemperatureHigh,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent implements OnInit {
  @Input()
  data: any;
  @Input()
  city: string = '';
  @Input()
  metric: string = '';

  constructor() {}

  ngOnInit(): void {}
  faWind = faWind;
  faMapMarker = faMapMarker;
  faCircle = faCircle;
  faTempH = faTemperatureHigh;
  faTempL = faTemperatureLow;
}
