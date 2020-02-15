import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';
import { WeatherData } from '../WeatherData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: { cnt: number, list: WeatherData[]};

  constructor(
    private service: WeatherService
  ) { }

  ngOnInit(): void {
    this.service.getFeatureCities().subscribe((x:any) => {
      this.cities = x; 
    })
  }

}
