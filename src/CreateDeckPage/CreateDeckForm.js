import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

//responsible for the form that will contain a 'Create Deck' label, a form for name and textarea description
function CreateDeckForm () {
    const initialFormState = {name: "", description: ""};
    const [formData, setFormData] = useState({...initialFormState});
    const [error, setError] = useState(undefined);
    const history = useHistory();

    //handleChange for create deck
    const handleChange = ({target}) => {
        setFormData({...formData, [target.name]: target.value});
    };
    //handle the submit for the deck
    const handleSubmit = (event) => {
        event.preventDefault();
        createDeck(formData).then((response)=> history.push(`decks/${response.id}`)).catch(setError);
    };
    if(error) {
        <ErrorMessage error={error} />
    }

    return (
        <div className="container">
            <h3> Create Deck</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" name="name" placeholder="Deck Name" value={formData.name} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" name="description" placeholder="Brief description of the deck" rows={3} value={formData.description} onChange={handleChange}></textarea>
                </div>
                <a href="/" className="btn btn-secondary">Cancel</a>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default CreateDeckForm;