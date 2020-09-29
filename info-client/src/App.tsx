import React from 'react';
import './normalize.css';
import './App.css';
import { CardPreview } from './components/CardPreview';
import { getCards, getACards } from './services/cardService';
import { BookCardForm } from './components/BookCardForm';
import { IBooks } from './models/books.model';
import { AuthorCardForm } from './components/AuthorCardForm';
import { IAuthors } from './models/authors.model';

function App() {
  const [cards, setCards] = React.useState<IBooks[]>([]);
  const [acards, setACards] = React.useState<IAuthors[]>([]);
  React.useEffect(() => {
    getCards().then(cards => {
      setCards(cards.books);
      console.log('Cards...', cards.books);
    })
  }, []);

  React.useEffect(() => {
    getACards().then(acards => {
      setACards(acards.authors);
      console.log('ACards...', acards.authors);
    })
  }, []);




  function handleAdd(card: any) {
    console.log('APP---1', card);
    setCards((existing: IBooks[]) => [...existing, card.book])

  }

  function handleAuthorAdd(acard: any) {
    console.log('APP---1', acard);
    setACards((existing: IAuthors[]) => [...existing, acard.author])

  }

  function handleUpdate(card: any) {
    console.log('APP---2', card);
    setCards((existing: IBooks[]) => existing.map(c => (c.id === card.book.id ? card.book : c)))
  }

  return (
    <div>
      <header>
        <h1>
          Info<span className="titleHighlite">Exchange</span>
        </h1>
        <h2>Book Management software</h2>
      </header>
      <main>
        <h3>Book Cards </h3>
        <div className="gridContainer">
          <BookCardForm onSave={handleAdd} />
          <AuthorCardForm onAuthorSave={handleAuthorAdd} />
          {cards.map(card => (
            <CardPreview
              key={card.id}
              {...card}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
