//this component will be responsible for displaying a breacrumb nav (Home/deck.name/Study)
//Header: "Study: deck.name"
//if deck.length is less than 3 switch content to 'Not Enough Cards'
//will display each card with the "card.id out of deck.length", card.front, and a flip button. 
//Upon clicking flip button you want to display of the same things except the card.front switches to card.back and a Next button
//When there are no more cards left, a window should pop up asking 'Restart Cards'
import { readDeck } from "../utils/api/index";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StudyNav from "./StudyNav";
import CardDisplay from "./CardDisplay";
import ErrorMessage from "../ErrorMessage";

export const Study = () => {
    const [deck, setDeck] = useState(null);
    const { deckId } = useParams();
    const [error, setError] = useState(undefined);
    
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
            <StudyNav deck={deck} />
            <div className="container">
                <h1>Study: {deck.name}</h1>
            </div>
            <CardDisplay deck={deck}/>
            </div>
        );
       
    }

        
  
}
export default Study;