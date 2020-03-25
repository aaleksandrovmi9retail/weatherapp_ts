import { AT } from "../actions/AT";

const initState = {
  weather: {
    current_condition: {
      weatherDesc: {}
    },
    request: {},
    time_zone: {},
    forecast: {
      hourly: {
        weatherDesc: {}
      }
    }
  },
  pending: true,
  city: "Sofia",
  userLocation: false,
  suggestions: [],
  showSuggestions: true
};

export const weatherReducer = (state = initState, action) => {
  const _action = {
    [AT.GET_DATA_SUCCESS]: () => {
      state = {
        ...state,
        weather: {
          current_condition: action.data.current_condition[0],
          time_zone: action.data.time_zone[0],
          request: action.data.request[0],
          forecast: action.data.weather
        },
        pending: false
      };
    },
    [AT.GET_DATA_PENDING]: () => {
      state = {
        ...state,
        pending: true
      };
    },
    [AT.GET_LOCATION_SUCCESS]: () => {
      state = {
        ...state,
        city: action.city,
        userLocation: true
      };
    },
    [AT.GET_SUGGESTIONS_SUCCESS]: () => {
      state = {
        ...state,
        suggestions: action.suggestions,
        showSuggestions: true
      };
    },
    [AT.HIDE_SUGGESTIONS]: () => {
      state = {
        ...state,
        showSuggestions: false
      };
    },
    [AT.SHOW_SUGGESTIONS]: () => {
      state = {
        ...state,
        showSuggestions: true
      };
    },
    DEFAULT: () => {
      state = {
        ...state
      };
    }
  };
  action.type in _action ? _action[action.type]() : _action.DEFAULT();

  return state;
};
