import { IAuthors } from "../models/authors.model";
import { IBooks } from "../models/books.model";

export function getCards() {
    return fetch('http://localhost:8000/books')
        .then(res => res.json());
}

export function getACards() {
    return fetch('http://localhost:8000/authors')
        .then(res => res.json());
}


export function saveCard(card: IBooks) {
    console.log('card type....', typeof (card))
    return card.id ? updateCard(card, `http://localhost:8000/book/${card.id}`) : createCard(card, 'http://localhost:8000/book');
}

export function saveACard(card: IAuthors) {
    console.log('card type....', typeof (card))
    return card.id ? updateCard(card, `http://localhost:8000/author/${card.id}`) : createCard(card, 'http://localhost:8000/author');
}
export function createCard(card: IBooks | IAuthors, url: string) {
    console.log('reached here....', card)
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(card)
    }).then(res => res.json())
}

function updateCard(card: IBooks | IAuthors, url: string) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(card)
    }).then(res => res.json())
}