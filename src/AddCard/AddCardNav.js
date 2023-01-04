import React from "react";
//this component is soley responsible for displaying the Home Link/Deck in AddCard component
function AddCardNav({deck}) {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>            
        </div>

    );
}
export default AddCardNav;