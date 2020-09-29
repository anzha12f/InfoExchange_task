import React from 'react';
import { saveACard } from '../services/cardService';

export function AuthorCardForm({ onAuthorSave, onCancel, acard }: any) {
    const id = acard && acard.id ? acard.id : undefined;

    const [fname, setFname] = React.useState(id ? acard.fname : '');
    const [lname, setLname] = React.useState(id ? acard.lname : '');

    function handleSubmit(event: any) {
        event.preventDefault()
        saveACard({ id, fname, lname }).then((acard: any) => {
            clearForm()
            onAuthorSave && typeof onAuthorSave === 'function' && onAuthorSave(acard)
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