import React, { useState, useEffect } from 'react';
import EditCardForm from './EditCardForm';
import EditCardNav from './EditCardNav';
import { readCard, readDeck } from '../utils/api';
import ErrorMessage from '../ErrorMessage';
import { useParams } from "react-router-dom";

//responsible for rendering the Edit Card Page
function EditCard() {
    const [deck, setDeck] = useState(null);
    const [card, setCard] = useState(null);
    const [error, setError] = useState(undefined);
    const { deckId, cardId } = useParams();

    //set deck and card with the deckId param and cardId param respectively - empty array at end because not dependent
    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        readCard(cardId, abortController.signal).then(setCard).catch(setError);
        return () => abortController.abort();
    }, []);

    if (error) {
        <ErrorMessage error={error} />
    }
    if(!deck || !card) {
        return <h2>Loading...</h2>
    } else {
        return (
            <div>
                <EditCardNav card={card} deck={deck} deckId={deckId} />
                <EditCardForm card={card} setCard={setCard} deckId={deckId}/>
            </div>
        );
    }
}
export default EditCard;