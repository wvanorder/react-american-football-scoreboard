//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
var moment = require('moment');

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

const [homeScore, homeChange] = useState(0);
const [awayScore, awayChange] = useState(0);
const [timer, timerSet] = useState(new Date().toLocaleTimeString());

useEffect(() => {
  setTimeout(() => {
    const date = new Date();
    timerSet(date.toLocaleTimeString());
  }, 1000);
}, [timer]);


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => {homeChange(homeScore + 7)}}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => {homeChange(homeScore + 3)}}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => {awayChange(awayScore + 7)}}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => {awayChange(awayScore + 3)}}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
