import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../WeatherData';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  city = "open weather";
  country = "search for current weather data";
  cityModel: string;

  @Output()
  weatherDataChange = new EventEmitter<WeatherData>();


  constructor(private service: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather() {
    this.service.getWeather(this.cityModel).subscribe((x: WeatherData) => {
      this.weatherDataChange.emit(x);
      if (!x)
        return;
      this.city = x.name;
      this.country = x.sys.country;
      console.log(x);
    })
  }

}
