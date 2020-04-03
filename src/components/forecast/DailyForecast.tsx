import React from "react";
import { weatherImage } from "../Functions";
import { format } from "date-fns";
import { connect } from "react-redux";

const DailyForecast = ({ weather, pending }) => {
  const dailyForecast = pending ? (
    ""
  ) : (
    <section className="col-lg-6 col-md-12  section-curr-weather">
      <h3>{weather.request.query}</h3>
      <div className="current-weather cf">
        <img
          className="weather-ico"
          src={weatherImage(
            weather.current_condition.isdaytime,
            weather.current_condition.weatherCode
          )}
          alt=""
        />
        <div className="information">
          <strong>{weather.current_condition.temp_C} °</strong>
          <h4 className="time">
            ,{format(new Date(weather.time_zone.localtime), "k:mm")}
          </h4>
          <h4 className="cf clr">
            {weather.current_condition.weatherDesc[0].value}
          </h4>
        </div>
      </div>
    </section>
  );
  return <>{dailyForecast}</>;
};

const mapStateToProps = (state: any) => {
  return {
    weather: state.weatherReducer.weather,
    pending: state.weatherReducer.pending
  };
};

export default connect(mapStateToProps)(DailyForecast);
