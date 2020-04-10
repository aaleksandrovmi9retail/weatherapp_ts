import {
  GET_DATA_PENDING,
  GET_DATA_SUCCESS,
  GET_LOCATION_SUCCESS,
  GET_SUGGESTIONS_SUCCESS,
  HIDE_SUGGESTIONS,
  SHOW_SUGGESTIONS,
  DEFAULT,
} from "../actions/AT";
// import { weatherActions } from "../actions/actions";
import { initialState } from "../interfaces/interfaces";

const initState: initialState = {
  current_condition: [
    {
      weatherDesc: [],
    },
  ],
  request: [],
  time_zone: [],
  weather: {
    hourly: [],
  },

  pending: true,
  city: "Sofia",
  userLocation: false,
  suggestions: [],
  showSuggestions: true,
  type: "",
};
export type Actions = initialState;
// export type initState = typeof initState;

export const weatherReducer = (state = initState, action: Actions) => {
  const actions = {
    [GET_DATA_SUCCESS]: () => {
      state = {
        ...state,
        ...action.weather,
        pending: false,
      };
    },
    [GET_DATA_PENDING]: () => {
      state = {
        ...state,
        pending: true,
      };
    },
    [GET_LOCATION_SUCCESS]: () => {
      state = {
        ...state,
        city: action.city,
        userLocation: true,
      };
    },
    [GET_SUGGESTIONS_SUCCESS]: () => {
      state = {
        ...state,
        suggestions: action.suggestions,
        showSuggestions: true,
      };
    },
    [HIDE_SUGGESTIONS]: () => {
      state = {
        ...state,
        showSuggestions: false,
      };
    },
    [SHOW_SUGGESTIONS]: () => {
      state = {
        ...state,
        showSuggestions: true,
      };
    },
    [DEFAULT]: () => {
      state = {
        ...state,
      };
    },
  };
  action.type in actions ? actions[action.type]() : actions[DEFAULT]();

  return state;
};
