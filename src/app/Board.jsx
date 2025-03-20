'use client'

import React, { useEffect, useState } from 'react';
import CardDetail from './CardDetail';
import Deck from './Deck';
import Introduction from './introduction';
import Interpretation from './Interpretation';
import Spread from './Spread';

import {Decks, Spreads, } from './tarot';

import styles from './Board.module.css';

const Board = () => {
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(Decks.RIDER_WAITE_TAROT.copy());
  const [spread, setSpread] = useState(Spreads.CELTIC);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  useEffect(() => {
    const imageArray = deck.cards.forEach(card => {
      const tempImage = new Image();
      tempImage.src = deck.getCardImageSrc(card)
    });
  }, [deck]);

  const drawCard = () => {
    if (spread.isComplete(deck.drawn.length)) { return; }
    const newCard = deck.drawCard();
    console.log(`Board:drawCard ${JSON.stringify(deck.drawn.map(card => card.name))}`)
    setCards(deck.drawn.slice());
  };

  const reset = () => {
    setCards([]);
    deck.reset();
    setSelectedCard(null);
    setHoverCard(null);
  };

  const complete = spread.isComplete(deck.drawn.length)

  const deckStyle = {
    cursor: complete ? 'not-allowed' : 'grab',
  };

  return <div className={styles.frame} onClick={() => setSelectedCard(null)}>
    <div className={styles.board}>
      {cards.length > 0 && 
        <Deck 
          className={styles.deck}
          {...{deck, reset}}
          onClick={drawCard}
          style={deckStyle}
        />
      }
      <Spread 
        className={styles.spread} 
        {...{spread, deck, cards, hoverCard, setHoverCard, setSelectedCard, reset}} 
      />
    </div>
    {cards.length === 0 && 
      <Introduction 
        className={styles.introduction}
        {...{deck, setCards, setSelectedCard, reset}}
      />
    }
    {selectedCard && 
      <CardDetail 
        className={styles.detail}
        {...{deck, card: selectedCard, setSelectedCard, reset}}
      />
    }
    {complete && 
      <Interpretation 
        className={styles.interpretation}
        {...{cards, deck, spread, reset}}
      />
    }
  </div>;
};

export default Board;