import React from "react";
//solely responsible for displaying the navigation for CreateDeck Page
function CreatDeckNav() {
    return (
        <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
        </div>
    );
}
export default CreatDeckNav;