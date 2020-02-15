import { Component, OnInit, Input } from '@angular/core';
import { WeatherData, WeatherDataForecast } from '../WeatherData';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  @Input()
  data: WeatherData;
  
  dataForecast: WeatherDataForecast;

  constructor( private service: WeatherService) { }

  ngOnInit(): void {
    this.service.getForecast(this.data.name).subscribe((x:any)=>{
      this.dataForecast = x;
    });

  }
  

}
