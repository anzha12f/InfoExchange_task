import { IAuthors } from "../models/authors.model";
import { IBooks } from "../models/books.model";

export function getCards() {
    return fetch('http://localhost:8000/books')
        .then(res => res.json());
}

export function saveCard(card: IBooks | IAuthors) {
    console.log('card type....', typeof (card))
    return card.id ? updateCard(card) : createCard(card);
}
export function createCard(card: IBooks | IAuthors) {
    console.log('reached here....', card)
    return fetch('http://localhost:8000/book', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(card)
    }).then(res => res.json())
}

function updateCard(card: IBooks | IAuthors) {
    return fetch(`http://localhost:8000/book/${card.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(card)
    }).then(res => res.json())
}