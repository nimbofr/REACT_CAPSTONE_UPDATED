import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import CreateDeck from "../Decks/CreateDeck";
import ViewDeck from "../Decks/ViewDeck";
import AddCard from "../Cards/AddCard";
import StudyDeck from "../Decks/StudyDeck";
import EditDeck from "../Decks/EditDeck";
import EditCard from "../Cards/EditCard";
import NotFound from "./NotFound";
import Header from "./Header";

function Layout() {
  return (
    <div className="app-routes">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/decks/new">
          <CreateDeck/>
        </Route>

        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>

        <Route exact path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewDeck />
        </Route>

        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>

        <Route path="/decks/:deckId/study">
          <StudyDeck />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </div>
  );
}

export default Layout;