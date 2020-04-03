import React, { useEffect } from "react";
import {
  getWeatherData,
  hideSuggestionsList
} from "../store/middleware/weather";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";

const CitySuggestions = ({
  suggestions,
  input,
  setInputs,
  getWeatherData,
  hideSuggestionsList,
  showSuggestions
}) => {
  const handleClick = (event: any) => {
    setInputs(() => ({
      city: event.target.textContent,
      changed: true
    }));
    hideSuggestionsList();
  };

  useEffect(() => {
    if (input.changed) {
      getWeatherData(input.city, true);
      setInputs(() => ({
        ...input,
        changed: false
      }));
    }
  }, [input, setInputs, getWeatherData]);

  const citySuggestions = suggestions ? (
    <>
      {suggestions.map(
        (
          results: { display_name: React.ReactNode },
          index: string | number | undefined
        ) => (
          <li key={index} onClick={handleClick}>
            {results.display_name}
          </li>
        )
      )}
    </>
  ) : (
    ""
  );

  return (
    <div className={showSuggestions && input.city.length >= 3 ? "" : "hidden"}>
      <ul className="suggestions">{citySuggestions}</ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    showSuggestions: state.weatherReducer.showSuggestions
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getWeatherData, hideSuggestionsList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CitySuggestions);
