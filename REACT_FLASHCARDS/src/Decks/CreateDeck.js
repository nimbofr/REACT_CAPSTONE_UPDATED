import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function CreateDeck() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const history = useHistory();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const abortController = new AbortController();
    const deck = {};
    deck.name = name;
    deck.description = description;
    await createDeck(deck, abortController.signal)

    setName("");
    setDescription("");
    history.push("/");
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
            <li className="ceatedeck-list"> Create Deck</li>
          </ul>
        </nav>

        <div className="card-name">
          <h1>  Create Deck</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="card-number">
            <h2>Name</h2>
            <input type="text" id="deckname" name="deckname" placeholder="Deck Name" onChange={handleNameChange} value={name} />
            <h2>Description</h2>
            <textarea id="description" name="deckdescription" rows="4" cols="50" placeholder="Brief description of the deck" onChange={handleDescriptionChange} value={description}></textarea>
          </div>

          <div className="deck-buttons-container">
            <div className="btn-group-left">
              <button className="button-sm btn-cancel" onClick={() => history.push(`/`)}>Cancel</button>
              <button className="button-sm btn-submit" id="submit" type="submit">Submit</button>

            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default CreateDeck;