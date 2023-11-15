import React from "react";
import "../App.css";
// import { FaPlus, FaRegEye, FaRegSave, FaTrashAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";

function CardForm({ handleSubmit, handleFrontChange, front, handleBackChange, back, deck }) {

  const history = useHistory();
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className="card-number">
          <h2>Front</h2>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Front side of card" onChange={handleFrontChange} value={front}></textarea>
          <h2>Back</h2>
          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Back side of card" onChange={handleBackChange} value={back}></textarea>
        </div>

        <div className="deck-buttons-container">
          <div className="btn-group-left">
            <button className="button-sm btn-done" onClick={() => history.push(`/decks/${deck.id}`)}>Done</button>
            <button className="button-sm btn-save">Save</button>
          </div>
        </div>
      </form>



    </>
  )
}

export default CardForm;