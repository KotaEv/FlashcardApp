import CreatDeckNav from "./CreateDeckNav";
import CreateDeckForm from "./CreateDeckForm";
import React from "react";

//this funciton is responsible for rendering the Create Deck Page
function CreateDeck() {
    return (
        <div>
            <CreatDeckNav/>
            <CreateDeckForm/>
        </div>
    );
}
export default CreateDeck;