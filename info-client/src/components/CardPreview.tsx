import React from 'react';
import '../normalize.css';
import '../App.css';
import { BookCardForm } from './BookCardForm';

export function CardPreview({ onUpdate, ...card }: any) {

  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isDisplayMode, setIsDisplayMode] = React.useState(false);

  function handleToggleEdit() {
    setIsEditMode(current => !current);
  }

  function handleToggleDisplay() {
    setIsDisplayMode(current => !current);
  }
  return isEditMode ? (
    <BookCardForm onCancel={handleToggleEdit} onSave={onUpdate} card={card} />
  ) : (
      <View {...card} onEdit={handleToggleEdit} display={isDisplayMode} onDisplay={handleToggleDisplay} />
    )
}

export function View({ id, name, isbn, author, onEdit, onDisplay, display }: any) {
  return (
    <div className="tile">
      <h4 className="cardTerm">{name}</h4>
      {display ? <div >
        <div className="tile">
          <h5 className="cardTerm">By</h5>
          <h5 className="cardTerm">{author}</h5>
        </div>
        <div className="tile">
          <h6 className="cardTerm">Isbn:{isbn}</h6>
        </div>
      </div> : ''}
      <div className="cardButtons">
        <button type="button" className="tertiary" onClick={onEdit}>Edit</button>
        <button type="button" className="tertiary" onClick={onDisplay}>{!display ? 'Details' : 'Hide'}</button>
      </div>
    </div>
  )
}
