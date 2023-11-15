import React, { useEffect, useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import DeckItem from "./DeckItem";
import { deleteDeck, listDecks } from "../utils/api";

function DeckMain() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks(abortController.signal).then((decks) => {
      setDecks(decks)
    })

    return () => {
      abortController.abort();
    };
  }, [])


  async function processDelete(deck) {
    const abortController = new AbortController();

    await deleteDeck(deck.id, abortController.signal);

    await listDecks(abortController.signal).then((decks) => {
      setDecks(decks)
    })
  }

  const deleteHandler = (deck) => {

    if (window.confirm('Are you sure you wish to delete this item?'))
    {
      processDelete(deck);
    }
  }

  const deckElement = decks.map((deck, index) => (
    < DeckItem deck={deck} deleteHandler={deleteHandler} key={index} />
  ))

  const history = useHistory();

  return (
    <>
      <div className="create-deck">
        <button className="button-sm btn-create" onClick={() => history.push("/decks/new")}>Create Deck</button>
      </div>
      {deckElement}
    </>
  );
}

export default DeckMain;