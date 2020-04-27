import React, { useEffect } from "react";
import {
  getWeatherData,
  hideSuggestionsList,
} from "../store/middleware/weather";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Props } from "../store/interfaces/interfaces";

const CitySuggestions = (props: CitySuggestionsProps) => {
  console.info(props);

  const handleClick = (event: any) => {
    props.setInputs(() => ({
      city: event.target.textContent,
      changed: true,
    }));
    props.hideSuggestionsList();
  };

  useEffect(() => {
    if (props.input.changed) {
      props.getWeatherData(props.input.city, true);
      props.setInputs(() => ({
        ...props.input,
        changed: false,
      }));
    }
  }, [props.input, props.setInputs, props.getWeatherData]);

  const citySuggestions = props.suggestions ? (
    <>
      {props.suggestions.map(
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
    <div
      className={
        props.showSuggestions && props.input.city.length >= 3 ? "" : "hidden"
      }
    >
      <ul className="suggestions">{citySuggestions}</ul>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    showSuggestions: state.weatherReducer.showSuggestions,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ getWeatherData, hideSuggestionsList }, dispatch);

type CitySuggestionsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  Props;

export default connect(mapStateToProps, mapDispatchToProps)(CitySuggestions);
