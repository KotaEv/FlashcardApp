import React from "react";
//responsible for displaying the Edit Card page breadcrumb nav
function EditCardNav({ card, deck, deckId }) {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deckId}`}>Deck {deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card {card.id}</li>
                </ol>
            </nav>
        </div>
    );
}
export default EditCardNav;