//this component will be solely responsible for showing each card
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function CardDisplay({ deck }) {
    const cards = deck.cards;
    const [cardId, setCardId] = useState(1);
    const [flipped, setFlipped] = useState(false);
    const [card, setCard] = useState({});
    const history = useHistory();
    
    //set card per the cardId param based on URL click
    useEffect(() => {
        const abortController = new AbortController();
        setCard({...cards[cardId-1]});
        return () => abortController.abort();
    }, [cardId]);
    
    //flip handle
    const handleFlip = () => {
        setFlipped(true);
        //console.log("You just hit the flip button on card: ", cardId);
    };
    //next btn handle
    const handleNext = () => {
        //console.log("You just hit the next button on card:", cardId);
        setCardId(cardId + 1);
        //console.log("You are now on card: ", cardId+1);
        setFlipped(false);
    };

    if (flipped === true && cardId === cards.length) {
        if (window.confirm("Restart cards?\nClick 'cancel' to return to the home page.")) {
            setCardId(1);
            setFlipped(false);
        } else {
            history.push("/");
        }
    }

if (!cards) {
    return <p>Loading...</p>
} else if (cards.length > 2) {
  return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {cardId} of {cards.length}</h5>
                    {!flipped ? (<p className="card-text">{card.front}</p>) :
                        (<p className="card-text">{card.back}</p>)
                    }
                    <button className="btn btn-secondary" onClick={handleFlip}>Flip</button>
                    {flipped && (<button className="btn btn-primary" onClick={handleNext}>Next</button>)}
                </div>
            </div>
        </div>
    );  
} else {
    return (
        <div className="container">
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <a href={`/decks/${deck.id}/cards/new`} className="btn btn-primary">+ Add Cards</a>
        </div>
    );
}


}
export default CardDisplay;