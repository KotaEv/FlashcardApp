import React from "react";
//this component is soley responsible for displaying the Home Link/Deck in Question/Study
function StudyNav({deck}) {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
                    <li className="breadcrumb-item active" aria-label="page">Study</li>
                </ol>
            </nav>
        </div>
    );
}
export default StudyNav;