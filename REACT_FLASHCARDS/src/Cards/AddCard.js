import React, { useState, useEffect } from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";

function AddCard() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});


  const handleFrontChange = (event) => { setFront(event.target.value) }
  const handleBackChange = (event) => { setBack(event.target.value) }

  const { deckId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then((deck) => {
      setFront(card.front)
      setBack(card.back)
      setCard(card)
      setDeck(deck)
    })
      .catch(err => {
        console.error(err)
      });

    return () => {
      abortController.abort();
    };
  }, [card, deckId])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const card = {};
    card.front = front;
    card.back = back;
    await createCard(deckId, card, abortController.signal)

    setFront("");
    setBack("");
  }

  return (
    <>
      <div className="main-container">
        <nav className="breadcrumb-nav">
          <ul className="breadcrumb-list">
            <Link to="/">
              <li className="breadcrumbx-item">
                Home
                <span> / </span>
              </li>
            </Link>
            <Link to={`/decks/${deck.id}`}>
              <li className="breadcrumb-item">{deck.name}<span> / </span></li></Link>
            <li className="breadcrumb-item">Add Card</li>
          </ul>
        </nav>

        <div>
          <div className="card-name">
            <h1>{deck.name}: Add Card</h1>
          </div>

          <div>
            <CardForm handleSubmit={handleSubmit} handleFrontChange={handleFrontChange} front={front} handleBackChange={handleBackChange} back={back} deck={deck} />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCard;