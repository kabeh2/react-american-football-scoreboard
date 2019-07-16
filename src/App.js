//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

import Buttons from "./components/buttons";
import Scoreboard from "./components/scoreboard";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const setHomeTouchDown = () => {
    setHomeScore(homeScore + 7);
  };

  const setHomeFieldGoal = () => {
    setHomeScore(homeScore + 3);
  };

  const setAwayTouchDown = () => {
    setAwayScore(awayScore + 7);
  };

  const setAwayFieldGoal = () => {
    setAwayScore(awayScore + 3);
  };

  return (
    <div className="container">
      <Scoreboard
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        setHomeTouchDown={setHomeTouchDown}
        setHomeFieldGoal={setHomeFieldGoal}
        setAwayTouchDown={setAwayTouchDown}
        setAwayFieldGoal={setAwayFieldGoal}
      />
      <Buttons
        homeScore={homeScore}
        setHomeScore={setHomeScore}
        awayScore={awayScore}
        setAwayScore={setAwayScore}
        setHomeTouchDown={setHomeTouchDown}
        setHomeFieldGoal={setHomeFieldGoal}
        setAwayTouchDown={setAwayTouchDown}
        setAwayFieldGoal={setAwayFieldGoal}
      />
    </div>
  );
}

export default App;
