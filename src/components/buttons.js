import React from "react";
import "../App.css";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          className="homeButtons__touchdown"
          onClick={props.setHomeTouchDown}
        >
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={() => props.setHomeScore(props.homeScore + 3)}
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          onClick={props.setAwayTouchDown}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={props.setAwayFieldGoal}
        >
          Away Field Goal
        </button>
      </div>
    </section>
  );
};

export default Buttons;
