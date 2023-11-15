import React from "react";
import DeckMain from "../Decks/DeckMain";
import { Switch } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <div className="main-container">
        <Switch>
          <DeckMain />
        </Switch>
      </div>
    </ React.Fragment >
  );
}

export default Home;