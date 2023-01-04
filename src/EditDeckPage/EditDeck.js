import EditDeckNav from "./EditDeckNav";
import EditDeckForm from "./EditDeckForm";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import ErrorMessage from "../ErrorMessage";


//responsible for rendering Edit Deck Page
function EditDeck() {
    const [deck, setDeck] = useState(null);
    const { deckId } = useParams();
    const [error, setError] = useState(undefined);
    
    //useEffect to setDeck w/ deckId param - dependent on deckId
    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deckId, abortController.signal).then(setDeck).catch(setError);
        return () => abortController.abort();
    }, [deckId]);

    if(error) {
        <ErrorMessage error={error} />
    }

    if(!deck) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                <EditDeckNav deck={deck}/>
                <EditDeckForm deck={deck}/>
            </div>
       
        );
    }
    
}
export default EditDeck;