import React from "react";
import "../App.css";

import TopRow from "./topRow";
import BottomRow from "../BottomRow";

const Scoreboard = props => {
  return (
    <section className="scoreboard">
      <TopRow homeScore={props.homeScore} awayScore={props.awayScore} />
      <BottomRow />
    </section>
  );
};

export default Scoreboard;
