import React from "react";
import { Route, Switch } from "react-router-dom";
import DeckList from "../HomePage/DeckList";
import Header from "./Header";
import NotFound from "./NotFound";
import Study from "../StudyPage/Study";
import AddCard from "../AddCard/AddCard";
import CreateDeck from "../CreateDeckPage/CreateDeck";
import Decks from "../DeckPage/Decks";
import EditDeck from "../EditDeckPage/EditDeck";
import EditCard from "../EditCardPage/EditCard";


function Layout() {
  return (
    <div>
      <Header />
      <Switch>
        {/* TODO: Implement the screen starting here */}
        <Route exact path="/">
          <DeckList />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <AddCard />
        </Route>
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        <Route exact path="/decks/:deckId">
          <Decks />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        <NotFound />
      </Switch>
    </div>
  );
}

export default Layout;
