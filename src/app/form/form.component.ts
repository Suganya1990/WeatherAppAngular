import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { WeatherService } from '../weather.service'
import { Weather } from '../weather'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [WeatherService]
})
export class FormComponent
{
//intialise forms, but still not validating when empty input boxes
  userInputForm = new FormGroup ({
  
    country: new FormControl('',Validators.required),
  province : new FormControl(''),
  city: new FormControl('', Validators.required),

  })

  //intialize variables
  country = ""
  province = ""
  city = ""
  errorMessage = ''
  metric = ""
  currentWeather: Weather = new Weather();
 faLocation = faLocationArrow
  

  constructor(private weatherService: WeatherService) {
  
  }

 setLocation = () =>{
       this.userInputForm.controls['country'].value ?  this.country= this.userInputForm.controls['country'].value: this.country=""
    this.userInputForm.controls['province'].value ? this.province = this.userInputForm.controls['province'].value: this.province=''
    this.userInputForm.controls['city'].value ? this.city = this.userInputForm.controls['city'].value: this.city=" "
    
  }

  onSubmit() {

 
   this.setLocation();
    this.weatherService.getData(this.country, this.province, this.city).subscribe(response => {
      let data: any = response
      this.currentWeather = data.main;
      this.currentWeather.weatherCondition = data.weather[0].description
      this.currentWeather.windSpeed = data.wind.speed;
      this.metric = this.weatherService.getMetric();
      data = {};
      


    },
      (error) => {
        this.errorMessage = error;
      }
    )

  }

}
