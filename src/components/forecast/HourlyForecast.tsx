import React from "react";
import { weatherImage, formatTime } from "../Functions";

const ForecastHourly = ({ forecast }) => {
  return (
    <div className="hourly slide-down">
      <ul>
        {forecast.hourly.map((hourly, index) => (
          <li className="item" key={index}>
            <div className="time">{formatTime(hourly.time)}</div>
            <div className="icon">
              <img
                src={weatherImage(hourly.isdaytime, hourly.weatherCode)}
                alt={hourly.weatherDesc[0].value}
                title={hourly.weatherDesc[0].value}
              />
            </div>
            <div className="temp"> {hourly.tempC} °</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastHourly;
