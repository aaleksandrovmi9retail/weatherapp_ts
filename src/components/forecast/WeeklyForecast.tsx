import React from "react";
import { weatherImage } from "../Functions";
import { format } from "date-fns";
import HourlyForecast from "./HourlyForecast";
import { connect } from "react-redux";
import Slider from "react-slick";

const WeeklyForecast = ({ weather, pending }) => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const weeklyForecast = pending ? (
    ""
  ) : (
    <section className="col-md-12 section-5days">
      <h3>14 Days Weather Forecast </h3>
      <ul className="days row">
        <Slider {...settings}>
          {weather.forecast.slice(0, 13).map((forecast, index) => (
            <li className="week-day" key={index}>
              <h4 className="date">
                {format(new Date(forecast.date), "eeee d")}
                <small className="month">
                  {format(new Date(forecast.date), "MMM")}
                </small>
              </h4>
              <img
                className="weather-ico"
                alt=""
                src={weatherImage(
                  forecast.hourly[4].isdaytime,
                  forecast.hourly[4].weatherCode
                )}
              />
              <div className="max-min-temp">
                {forecast.mintempC} ° | <strong> {forecast.maxtempC} °</strong>
              </div>
              <div
                className="day-description"
                title={forecast.hourly[4].weatherDesc[0].value}
              >
                {forecast.hourly[4].weatherDesc[0].value}
              </div>
              <div className="rain slide-down">
                <span className="left">Rain</span>
                <span className="dash-center">-</span>
                <span className="right">
                  {" "}
                  {forecast.hourly[4].chanceofrain} %{" "}
                </span>
              </div>
              <div className="wind slide-down">
                <span className="left">Wind</span>
                <span className="dash-center">-</span>
                <span className="right">
                  {forecast.hourly[4].windspeedKmph} km/h
                </span>
              </div>

              <HourlyForecast forecast={forecast} />
            </li>
          ))}
        </Slider>
      </ul>
    </section>
  );
  return <>{weeklyForecast} </>;
};

const mapStateToProps = state => {
  return {
    weather: state.weatherReducer.weather,
    pending: state.weatherReducer.pending
  };
};

export default connect(mapStateToProps)(WeeklyForecast);
