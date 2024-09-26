import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather () {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            city: response.data.name,
            date: "Wednesday 07:00",
            temperature: response.data.main.temp,
            iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            
        });

        setReady(true);
    }

    if (ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input 
                                type="search" 
                                placeholder="Enter a city" 
                                className="form-control"
                                autoFocus="on"
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
                <h1>
                    {weatherData.city}
                </h1>
                <ul>
                    <li>
                        {weatherData.date}
                    </li>
                    <li className="text-capitalize">
                        {weatherData.description}
                    </li>
                </ul>
                <div className="row">
                    <div className="col-6">
                            <img  
                                src= {weatherData.iconUrl}
                                alt= {weatherData.description}
                            />
                            <span className="temperature"> {Math.round(weatherData.temperature)} </span>
                            <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind}km/hr
                            </li>
                        </ul>
                    </div>
    
                </div>
    
            </div>
        ); 
    } else {
        let city = "New York"
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }
}