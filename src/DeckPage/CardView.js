import React from "react";
import { deleteCard } from "../utils/api";
//responsible for rendering one card with edit and delete buttons, card fron and card back
function CardView({ card, url }) {
    //async handleDelete with warning message
    const handleCardDelete = async (cardId) => {
        if(window.confirm("Delete this card?\nYou will not be able to recover it.")) {
            await deleteCard(card.id);
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <div className="card-text">
                    <p>{card.front}</p>
                    <p>{card.back}</p>
                </div>
            </div>
            <div className="card-footer">
                <a href={`${url}/cards/${card.id}/edit`}className="btn btn-secondary">Edit</a>
                <button className="btn btn-danger" onClick={handleCardDelete}>Delete</button>
            </div>
        </div>    
    );
}
export default CardView;