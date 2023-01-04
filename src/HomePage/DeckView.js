//this component solely responsible for displaying the deck with a deiscription and three buttons, view, study, delete
import React from "react";
import { deleteDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

function DeckView({ deck = { cards: [] } }) {
    const history = useHistory();

    //handle delete w/ warning
    const handleDelete = async (deckId) => {
        if (window.confirm("Delete this deck?\nYou will not be able to recover it.")) {
            await deleteDeck(deck.id);
        }
        //push home page to history to return to home route after delete
        history.push("/");
    }; 

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <a className="btn btn-secondary" href={`/decks/${deck.id}`}>View</a> 
                <a className="btn btn-primary" href={`/decks/${deck.id}/study`}>Study</a>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
}
export default DeckView;
//hrefs need to be updated