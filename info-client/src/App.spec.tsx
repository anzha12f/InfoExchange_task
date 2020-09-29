import React from 'react'
import { render, act } from '@testing-library/react'
import App from './App'
import { getCards } from './services/cardService'
import { IBooks } from './models/books.model'

const mockFn = jest.mock('./services/cardService');


it('Renders cards from the API', async () => {
    const mockCards = [
        { id: 1, name: 'Book 1' },
        { id: 2, term: 'Book 2' },
        { id: 3, term: 'Book 3' }
    ];

    const asynMock = await getCards().then(() => {
        return jest.fn().mockResolvedValue(mockCards);
    });
    let getByText: any;
    await act(async () => {
        ({ getByText } = render(<App />))
    })
    await asynMock().forEach((card: IBooks) => {
        expect(getByText(card.name)).toBeInTheDocument()
    })
})