import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { updateCard } from "../utils/api";
import { useHistory } from "react-router-dom";

//responsible for rendering Edit Card Form
function EditCardForm({ card, setCard, deckId }) {
    const [error, setError] = useState(undefined);
    const [formData, setFormData] = useState({...card});
    const history = useHistory();

    //handle change in form
    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value });
    };
    //handle submit to update card
    const handleSubmit = (event) => {
        event.preventDefault();
        updateCard(formData).then(setCard).catch(setError).then(history.push(`/decks/${deckId}`));
    };
    
    if(error) {
        <ErrorMessage error={error} />
    }

    return (
        <div className="container">
            <h1>Edit Card</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <input className="form-control" name="front" value={formData.front} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea className="form-control" name="back" value={formData.back} onChange={handleChange} rows={3}></textarea>
                </div>
                <a href={`/decks/${deckId}`} className="btn btn-secondary">Cancel</a>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default EditCardForm;