'use client'

import React, { useState } from 'react';
import CardDetail from './CardDetail';
import Deck from './Deck';
import Introduction from './Introduction';
import Spread from './Spread';

import {Decks, Spreads, } from './tarot';

import styles from './Board.module.css';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(Decks.RIDER_WAITE_TAROT);
  const [spread, setSpread] = useState(Spreads.CELTIC);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  const drawCard = () => {
    if (spread.isComplete(deck.drawn.length)) { return; }
    const newCard = deck.drawCard();
    console.log(`Board:drawCard ${JSON.stringify(deck.drawn.map(card => card.name))}`)
    setCards(deck.drawn.slice());
  };

  const deckStyle = {
    cursor: spread.isComplete(deck.drawn.length) ? 'not-allowed' : 'grab',
  };

  return <div className={styles.frame} onClick={() => setSelectedCard(null)}>
    <div className={styles.board}>
      <Deck className={styles.deck} {...{deck, drawCard}} style={deckStyle}/>
      <Spread className={styles.spread} {...{spread, deck, cards, hoverCard, setHoverCard, setSelectedCard}} />
    </div>
    {cards.length == 0 && <Introduction className={styles.introduction} {...{deck, setCards, setSelectedCard}}/>}
    {selectedCard && <CardDetail className={styles.detail} {...{deck, card: selectedCard, setSelectedCard}}/>}
  </div>;
};

export default Board;