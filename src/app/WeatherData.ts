export interface WeatherData {
    name: string;
    sys: {
        country: string;
    };
    weather: Array<{
        main: string;
        description: string;
        icon: string;
    }>;
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    }
    wind:{
        speed: number;
    }
}

export interface WeatherDataForecast {
    list: Array<{
        weather: Array<{
            main: string;
            description: string;
            icon: string;
        }>;
        main: {
            temp: number;
            temp_min: number;
            temp_max: number;
            humidity: number;
        }
        wind:{
            speed: number;
        }
        dt_txt: Date;
    }>

}