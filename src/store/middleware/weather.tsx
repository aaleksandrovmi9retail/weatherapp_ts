import {
  getDataPending,
  getDataSuccess,
  getLoacationSuccess,
  getSuggestionsSuccess,
  hideSuggestions,
  showSuggestions,
} from "../actions/actions";

export const getWeatherData = (city, refresh) => {
  return (dispatch) => {
    if (!refresh) {
      dispatch(getDataPending());
    }
    // setTimeout(() => {}, 1200);
    fetch(
      `https://api.worldweatheronline.com/premium/v1/weather.ashx?q=${city}&extra=isDayTime,localObsTime,utcDateTime&format=json&showlocaltime=yes&key=a0c0e9034ea64178abf132740201902`
    )
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

export const getUserLocation = (latitude, longitude) => {
  return (dispatch) => {
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

export const getSuggestions = (query) => {
  return (dispatch) => {
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
  return (dispatch) => {
    dispatch(hideSuggestions());
  };
};

export const showSuggestionsList = () => {
  return (dispatch) => {
    dispatch(showSuggestions());
  };
};
