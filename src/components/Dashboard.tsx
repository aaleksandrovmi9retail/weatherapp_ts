import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchForm from "./SearchForm";
import DailyForecast from "./forecast/DailyForecast";
import WeeklyForecast from "./forecast/WeeklyForecast";
import { useBodyClass } from "./Functions";
import { bindActionCreators, compose, Dispatch } from "redux";
import { geolocated } from "react-geolocated";
import { getWeatherData, getUserLocation } from "../store/middleware/weather";
import { bodyBackgroundClass } from "./Functions";
import Loading from "./Loading";

const Dashboard: React.FC<any> = ({
  weather,
  current_condition,
  pending,
  getWeatherData,
  getUserLocation,
  city,
  coords,
  userLocation,
}) => {
  // changing the body background regarding
  //day/night or sunny/rainy etc.
  useBodyClass(
    bodyBackgroundClass(
      current_condition[0].isdaytime,
      current_condition[0].weatherCode
    )
  );
  // console.info(weather);

  useEffect(() => {
    // if is first site load
    if (pending) {
      getWeatherData(city, false);
    }
    // if user shares location, rerender
    if (userLocation) {
      getWeatherData(city, true);
    }
  }, [userLocation, city, getWeatherData, pending]);

  // get the user city by lat long choords
  useEffect(() => {
    if (coords) {
      getUserLocation(coords.latitude, coords.longitude);
    }
  }, [coords, getUserLocation]);

  return (
    <>
      <Loading />
      <div className="container content-wrapper">
        <div className="weather-forecast cf">
          <div className="row ">
            <DailyForecast />
            <SearchForm />
            <WeeklyForecast />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    current_condition: state.weatherReducer.current_condition,
    pending: state.weatherReducer.pending,
    city: state.weatherReducer.city,
    userLocation: state.weatherReducer.userLocation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getWeatherData, getUserLocation }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  geolocated({
    positionOptions: { enableHighAccuracy: true },
    userDecisionTimeout: 5000,
  })
)(Dashboard);
