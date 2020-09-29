import React from 'react';
import { IAuthors } from '../models/authors.model';
import { saveACard } from '../services/cardService';

export function AuthorCardForm({ onAuthorSave, onCancel, acard, acards }: any) {
    console.log('value of acard', acard);
    //let id = acard && acard.id ? acard.id : undefined;
    const [id, setId] = React.useState('');
    const [fname, setFname] = React.useState('');
    const [lname, setLname] = React.useState('');
    const [isEditMode, setIsEditMode] = React.useState(false);



    function handleSubmit(event: any) {
        event.preventDefault();
        console.log('P1....', id);
        saveACard({ id, fname, lname }).then((acard: any) => {
            clearForm();
            setIsEditMode(false);
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
        const value1 = findValue(value);
        setIsEditMode(value1 ? true : false);
        setFname(value1 ? value1.fname : value);
        setLname(value1 ? value1.lname : '');
        setId(value1 ? value1.id : '');
    }
    function handleLnameChange(event: any) {
        const { value } = event.target;
        setLname(value);
    }

    function findValue(value: string): IAuthors | undefined {

        const existName = acards.find((c: IAuthors) => c.fname === value);
        if (existName) {
            return existName;
        }
        return undefined;
    }


    return (
        <div className="tile">
            <h4>{id ? 'Update Author' : 'Add Author'}</h4>
            <form onReset={clearForm} onSubmit={handleSubmit}>
                <div>
                    {isEditMode ? <b>Edit Mode</b> : <b>Insert Mode</b>}
                </div>
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