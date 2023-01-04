//this componenent should solely be responsible for showing the list of decks

import { listDecks } from "../utils/api";
import React, { useState, useEffect } from "react";
import DeckView from "./DeckView";
import ErrorMessage from "../ErrorMessage";

function DeckList() {
    const [decks, setDecks] = useState([]);
    const [error, setError] = useState(undefined);

    //useEffect to set decks
    useEffect(() => {
        const abortController = new AbortController();
        listDecks(abortController.signal).then(setDecks).catch(setError);
        return () => abortController.abort();
    }, []);

    if (error) {
        return <ErrorMessage error={error}/>
    }
    if(!decks) {
        return <h2>Loading...</h2>;
    } else {
        //map decks to feed DeckView
        const list = decks.map((deck) => <DeckView key={deck.id} deck={deck} />)

        return (
            <div className="container">
                <a className="btn btn-secondary" href="/decks/new">+ Create Deck</a>
                <div> {list} </div>
            </div>
        );    
    }
    
}
export default DeckList;