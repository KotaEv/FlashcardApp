import AddCardNav from "./AddCardNav";
import { readDeck } from '../utils/api/index';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import AddCardForm from "./AddCardForm";
//Solely responsible for adding a new card to an already existing deck
//Routes to '/decks/:deckId/cards/new'
function AddCard() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
    const [error, setError] = useState(undefined);
    
    //useEffect to setDeck with the current deckId from the params
    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId]);

    if(error) {
        <ErrorMessage error={error} />
    }

    if(!deck.id) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                <AddCardNav deck={deck} />
                <AddCardForm deck={deck} />
            </div>
        );
    }
    
}
export default AddCard;