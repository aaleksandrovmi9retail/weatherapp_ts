import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_LOCATION_SUCCESS,
  GET_SUGGESTIONS_SUCCESS,
  HIDE_SUGGESTIONS,
  SHOW_SUGGESTIONS,
  DEFAULT,
} from "./AT";
import { dailyForecast, suggestion } from "../interfaces/interfaces";

export const getDataPending = () => {
  return <const>{
    type: GET_DATA_PENDING,
  };
};

export const getDataSuccess = (weather: dailyForecast) => {
  return <const>{
    type: GET_DATA_SUCCESS,
    weather,
  };
};

export const getLoacationSuccess = (city: string) => {
  return <const>{
    type: GET_LOCATION_SUCCESS,
    city,
  };
};

export const getSuggestionsSuccess = (suggestions: suggestion) => {
  return <const>{
    type: GET_SUGGESTIONS_SUCCESS,
    suggestions,
  };
};

export const hideSuggestions = () => {
  return <const>{
    type: HIDE_SUGGESTIONS,
  };
};
export const showSuggestions = () => {
  return <const>{
    type: SHOW_SUGGESTIONS,
  };
};
