import React from 'react';
import { saveCard } from '../services/cardService';

export function AuthorCardForm({ onSave, onCancel, card }: any) {
    const id = card && card.id ? card.id : undefined;

    const [fname, setFname] = React.useState(id ? card.fname : '');
    const [lname, setLname] = React.useState(id ? card.lname : '');

    function handleSubmit(event: any) {
        event.preventDefault()
        saveCard({ id, fname, lname }).then((card: any) => {
            clearForm()
            // onSave && typeof onSave === 'function' && onSave(card)
        })
    }

    function clearForm() {
        setFname('');
        setLname('');
        onCancel && typeof onCancel === 'function' && onCancel()
    }

    function handleFnameChange(event: any) {
        const { value } = event.target;
        setFname(value);
    }
    function handleLnameChange(event: any) {
        const { value } = event.target;
        setLname(value);
    }

    return (
        <div className="tile">
            <h4>{id ? 'Update Author' : 'Add Author'}</h4>
            <form onReset={clearForm} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author_fname">fname</label>
                    <input id="author_fname" type="text" value={fname} onChange={handleFnameChange} />
                </div>
                <div>
                    <label htmlFor="author_lname">lname</label>
                    <input id="author_lname" type="text" value={lname} onChange={handleLnameChange} />
                </div>

                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset">cancel</button>
                </div>
            </form>
        </div>
    )
}