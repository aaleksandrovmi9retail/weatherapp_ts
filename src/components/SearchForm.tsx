import React, { useEffect, useState } from "react";
import {
  getWeatherData,
  getSuggestions,
  showSuggestionsList,
  hideSuggestionsList
} from "../store/middleware/weather";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CitySuggestions from "./CitySuggestions";

const SearchForm = ({
  getWeatherData,
  city,
  getSuggestions,
  suggestions,
  showSuggestionsList,
  showSuggestions,
  hideSuggestionsList
}) => {
  const [input, setInputs] = useState({ city: "" });
  const [button, setButton] = useState(false);

  const handleInputChange = event => {
    event.persist();
    setInputs(input => ({
      ...input,
      [event.target.name]: event.target.value
    }));
    showSuggestionsList();
  };

  const handleClickSubmit = e => {
    e.preventDefault();

    //use the city typed in the input, or the default state from the store
    const citySearch = input.city ? input.city : city;
    getWeatherData(citySearch, true);
    hideSuggestionsList();
  };

  // if user types more then 3 chars send get call for city suggestions
  useEffect(() => {
    if (input.city.length >= 3 && showSuggestions) {
      getSuggestions(input.city);
    }
  }, [input, getSuggestions, showSuggestions, showSuggestionsList]);

  // rotate animation for the refresh button
  const toggleButtonAnimation = () => {
    setButton(true);

    setTimeout(() => {
      setButton(false);
    }, 2200);
  };

  return (
    <section className="col-lg-6 col-md-12  section-curr-weather">
      <img
        className={
          button
            ? "refresh-button-spin right pointer refresh "
            : "right pointer refresh "
        }
        onClick={e => {
          toggleButtonAnimation();
          handleClickSubmit(e);
        }}
        src="./images/refresh.png"
        alt=""
      />
      <form className="search-city-form cf" onSubmit={handleClickSubmit}>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            className="form-control left"
            onChange={handleInputChange}
            autoComplete="off"
            value={input.city}
          />

          <CitySuggestions
            suggestions={suggestions}
            input={input}
            setInputs={setInputs}
          />

          <button
            type="button"
            className="btn btn-success"
            disabled={!input.city}
            onClick={handleClickSubmit}
          >
            <i className="fa fa-search"> </i>
            Search
          </button>
        </div>
      </form>
    </section>
  );
};
const mapStateToProps = state => {
  return {
    city: state.weatherReducer.city,
    suggestions: state.weatherReducer.suggestions,
    showSuggestions: state.weatherReducer.showSuggestions
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getWeatherData,
      getSuggestions,
      showSuggestionsList,
      hideSuggestionsList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
