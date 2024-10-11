import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import Axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "2a48ab03df66cfdeo2cf2td262aab2a0";
    let cityForecast = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${cityForecast}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">
                        Thu
                    </div>
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperatures-max"> 19°</span>
                        <span className="WeatherForecast-temperatures-min"> 10°</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}