import React from "react";
//responsible for returning Edit Deck Navigation
function EditDeckNav({deck}) {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-label="page">Edit Deck</li>
                </ol>
            </nav>
        </div>
    );
}
export default EditDeckNav;