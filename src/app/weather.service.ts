import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  private readonly API_KEY = '40d51480c201fe95f97c095b7acc8f22';

  private readonly cities = [784227, 792680, 785842, 727011];

  constructor(private httpClient: HttpClient) { }

  public getFeatureCities() {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/group?id=${this.cities}&appid=${this.API_KEY}&units=metric`);
  }

  public getWeather(city: string) {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=metric`);
  }

  public getForecast(city: string){
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.API_KEY}&units=metric`)
  }
}
