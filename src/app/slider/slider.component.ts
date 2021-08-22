import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  //true == default metric I think I made them opposite as the function
  value = 'metric'
  isDefault: boolean = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  myClickFunction() {
    this.isDefault = !this.isDefault
 
    if (this.isDefault === true)
      this.value = "metric"
    if (this.isDefault === false)
    {
      this.value = 'imperial'
    }
    // console.log('My Click Function: ' + this.value)
    this.weatherService.setMetric(this.value)
  
  }

}
