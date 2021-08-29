import { Component, OnInit, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  //true == default metric I think I made them opposite as the function

  isDefault: boolean = false;

  @Output() metricEvent = new EventEmitter<string>();
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  myClickFunction() {
    if (this.isDefault === true) {
      this.metricEvent.emit('metric');
    }
    if (this.isDefault === false) {
      this.metricEvent.emit('imperial');
    }
    this.isDefault = !this.isDefault;
  }
}
