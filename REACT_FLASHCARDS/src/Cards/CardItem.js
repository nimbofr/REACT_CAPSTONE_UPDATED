import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

function CardItem({ deck, card, deleteCardHandler }) {

  const history = useHistory();
  return (
    <div className="cards-container">
      <div className="row justify-content-center">
        <div className="column">
          <p>{card.front}</p>
        </div>
        <div className="column">
          <p>{card.back}</p>
        </div>
      </div>

      <div className="card-buttons-container">
        <div className="btn-group-right">

          <button className="button-sm btn-edit" onClick={() => history.push(`/decks/${deck.id}/cards/${card.id}/edit`)}>Edit</button>

          <button className="button-sm btn-delete" onClick={() => {
            deleteCardHandler(card)
          }}>Delete</button>

        </div>
      </div>
    </div>
  )
}

export default CardItem;