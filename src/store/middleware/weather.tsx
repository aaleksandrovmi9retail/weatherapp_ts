import {
  getDataPending,
  getDataSuccess,
  getLoacationSuccess,
  getSuggestionsSuccess,
  hideSuggestions,
  showSuggestions,
} from "../actions/actions";
import { Dispatch } from "redux";

export const getWeatherData = (city: string, refresh: boolean) => {
  return (dispatch: Dispatch) => {
    if (!refresh) {
      dispatch(getDataPending());
    }
    fetch(`http://localhost:8000/forecast?city=${city}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.info(res.data);
        const weather = res.data;
        dispatch(getDataSuccess(weather));
        return res;
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getUserLocation = (latitude: string, longitude: string) => {
  return (dispatch: Dispatch) => {
    fetch(
      `https://eu1.locationiq.com/v1/reverse.php?key=41bc52deab055b&lat=${latitude}&lon=${longitude}&format=json`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }

        const city = res.address.city;

        dispatch(getLoacationSuccess(city));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const getSuggestions = (query: string) => {
  return (dispatch: Dispatch) => {
    fetch(
      `https://eu1.locationiq.com/v1/search.php?key=41bc52deab055b&q=${query}&format=json`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        const suggestions = res;

        dispatch(getSuggestionsSuccess(suggestions));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const hideSuggestionsList = () => {
  return (dispatch: Dispatch) => {
    dispatch(hideSuggestions());
  };
};

export const showSuggestionsList = () => {
  return (dispatch: Dispatch) => {
    dispatch(showSuggestions());
  };
};
