'use client'

import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import CardDetail from './CardDetail';
import Deck from './Deck';
import Introduction from './introduction';
import Interpretation from './Interpretation';
import Spread from './Spread';
import {Cards, Decks, Spreads, } from './tarot';

import styles from './Board.module.css';

const Actions = ({actions}) => {
  return <div className={styles.actions}>
    {actions.map((action, idx) => {
      const {text, primary} = action;
      const buttonCls = classNames(styles.action, {
        [styles.primary]: primary,
      });
      return <button
        key={`BoardAction-${idx}`}
        className={buttonCls}
        onClick={action.onClick}>
        {text}
      </button>;
    })}
  </div>;
};

const Board = () => {
  const [actions, setActions] = useState([]);
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

  const complete = spread.isComplete(deck.drawn.length);

  const deckStyle = {
    cursor: complete ? 'not-allowed' : 'grab',
  };

  return <div className={styles.frame} onClick={() => setSelectedCard(null)}>
    <div className={styles.board}>
      <div className={styles.left}>
        {cards.length > 0 && 
          <Deck 
            className={styles.deck}
            {...{deck, reset}}
            onClick={drawCard}
            style={deckStyle}
          />
        }
        {actions.length > 0 && <Actions {...{actions}}/>}
      </div>
      <Spread 
        className={styles.spread} 
        {...{spread, deck, cards, hoverCard, setHoverCard, setSelectedCard, reset}} 
      />
    </div>
    <Interpretation 
      className={styles.interpretation}
      {...{cards, deck, spread, reset, setActions}}
    />
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
  </div>;
};

export default Board;