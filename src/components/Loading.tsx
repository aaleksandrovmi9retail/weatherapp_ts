import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const Loading = ({ pending }) => {
  const [timer, setTimer] = useState(2);

  useEffect(() => {
    let Timer;
    if (timer > 0) {
      Timer = setTimeout(function() {
        setTimer(timer - 1);
      }, 1000);
    } else {
      clearTimeout(Timer);
    }
  }, [timer]);

  const loading =
    // Display the loading screen for 2s or if fetching is not completed
    pending || timer > 0 ? (
      <div className="pg-loading-screen pg-loading">
        <div className="pg-loading-inner">
          <div className="pg-loading-center-outer">
            <div className="pg-loading-center-middle">
              <h1 className="pg-loading-logo-header">
                <img
                  className="pg-loading-logo"
                  src="./images/logo.png"
                  alt=""
                />
              </h1>
              <div className="pg-loading-html pg-loaded">
                <div className="sk-spinner sk-spinner-wave">
                  <div className="sk-rect1"></div>
                  <div className="sk-rect2"></div>
                  <div className="sk-rect3"></div>
                  <div className="sk-rect4"></div>
                  <div className="sk-rect5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  return <> {loading} </>;
};

const mapStateToProps = state => {
  return {
    pending: state.weatherReducer.pending
  };
};

export default connect(mapStateToProps)(Loading);
