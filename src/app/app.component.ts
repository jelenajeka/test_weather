import { Component } from '@angular/core';
import { WeatherData } from './WeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: WeatherData;

  onWeatherChange(event) {
    this.weatherData = event;
  }
  
}
