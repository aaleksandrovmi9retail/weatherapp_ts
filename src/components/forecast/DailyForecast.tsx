import React from "react";
import { weatherImage } from "../Functions";
import { format } from "date-fns";
import { connect } from "react-redux";

const DailyForecast = ({ current_condition, time_zone, pending, request }) => {
  const dailyForecast = pending ? (
    ""
  ) : (
    <section className="col-lg-6 col-md-12  section-curr-weather">
      <h3>{request[0].query}</h3>
      <div className="current-weather cf">
        <img
          className="weather-ico"
          src={weatherImage(
            current_condition[0].isdaytime,
            current_condition[0].weatherCode
          )}
          alt=""
        />
        <div className="information">
          <strong>{current_condition[0].temp_C} °</strong>
          <h4 className="time">
            ,{format(new Date(time_zone[0].localtime), "k:mm")}
          </h4>
          <h4 className="cf clr">
            {current_condition[0].weatherDesc[0].value}
          </h4>
        </div>
      </div>
    </section>
  );
  return <>{dailyForecast}</>;
};

const mapStateToProps = (state: any) => {
  return {
    current_condition: state.weatherReducer.current_condition,
    time_zone: state.weatherReducer.time_zone,
    request: state.weatherReducer.request,
    pending: state.weatherReducer.pending,
  };
};

export default connect(mapStateToProps)(DailyForecast);
