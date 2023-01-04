import React, { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage";
import { readDeck, updateDeck } from "../utils/api";

//responsible for returning Edit Deck form and storing information
function EditDeckForm({deck}) {
    const [current, setCurrent] = useState({...deck});
    const [formData, setFormData] = useState({...current});
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const abortController = new AbortController();
        readDeck(deck.id, abortController.signal).then(setCurrent).catch(setError);
        return () => abortController.abort();
    }, [deck.id]);

    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    };
    //handle submit of update deck
    const handleSubmit = (event) => {
        event.preventDefault();
        updateDeck(formData).then(setCurrent).catch(setError);
    };
    

    if (error) {
        <ErrorMessage error={error} />
    }

    return (
        <div className="container">
            <h1>Edit Deck</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" name="name" value={formData.name} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows={3}></textarea>
                </div>
                <a href={`/decks/${deck.id}`} className="btn btn-secondary">Cancel</a>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
}
export default EditDeckForm;