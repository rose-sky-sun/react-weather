import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {    
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.name,
            date:  new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            icon: response.data.weather[0].icon,
            //iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            
        });
    }

    function search() {
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="col-9">
                            <input 
                                type="search" 
                                placeholder="Enter a city" 
                                className="form-control"
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-3">  
                            <input
                                type="submit" 
                                value="Search" 
                                className="btn btn-primary w-100"
                            />
                        </div>      
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
                <WeatherForecast city={weatherData.city} />
            </div>
        ); 
    } else {
        search();
        return "Loading...";
    }
}