import { AT } from "./AT";

export const getDataPending = () => {
  return {
    type: AT.GET_DATA_PENDING
  };
};

export const getDataSuccess = data => {
  return {
    type: AT.GET_DATA_SUCCESS,
    data
  };
};

export const getLoacationSuccess = city => {
  return {
    type: AT.GET_LOCATION_SUCCESS,
    city
  };
};

export const getSuggestionsPending = () => {
  return {
    type: AT.GET_SUGGESTIONS_PENDING
  };
};

export const getSuggestionsSuccess = suggestions => {
  return {
    type: AT.GET_SUGGESTIONS_SUCCESS,
    suggestions
  };
};

export const hideSuggestions = () => {
  return {
    type: AT.HIDE_SUGGESTIONS
  };
};
export const showSuggestions = () => {
  return {
    type: AT.SHOW_SUGGESTIONS
  };
};
