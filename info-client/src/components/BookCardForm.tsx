import React from 'react';
import { saveCard } from '../services/cardService';

export function BookCardForm({ onSave, onCancel, card }: any) {
    const id = card && card.id ? card.id : undefined;

    const [name, setName] = React.useState(id ? card.name : '');
    const [isbn, setIsbn] = React.useState(id ? card.isbn : '');
    const [author, setAuthor] = React.useState(id ? card.author : '');

    function handleSubmit(event: any) {
        event.preventDefault()
        saveCard({ id, name, isbn, author }).then((card: any) => {
            clearForm()
            onSave && typeof onSave === 'function' && onSave(card)
        })
    }

    function clearForm() {
        setName('');
        setIsbn('');
        setAuthor('');
        onCancel && typeof onCancel === 'function' && onCancel()
    }

    function handleNameChange(event: any) {
        const { value } = event.target;
        setName(value);
    }
    function handleIsbnChange(event: any) {
        const { value } = event.target;
        setIsbn(value);
    }
    function handleAuthorChange(event: any) {
        const { value } = event.target;
        setAuthor(value);
    }
    return (
        <div className="tile">
            <h4>{id ? 'Update Book' : 'Add Book'}</h4>
            <form onReset={clearForm} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="book_name">name</label>
                    <input id="book_name" type="text" value={name} onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="book_isbn">isbn</label>
                    <input id="book_isbn" type="text" value={isbn} onChange={handleIsbnChange} />
                </div>
                <div>
                    <label htmlFor="book_author">author</label>
                    <input id="book_author" type="text" value={author} onChange={handleAuthorChange} />
                </div>
                <div className="buttons">
                    <button className="primary" type="submit">save</button>
                    <button className="secondary" type="reset">cancel</button>
                </div>
            </form>
        </div>
    )
}