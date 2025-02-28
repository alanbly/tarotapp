'use client'

import React, { useRef, useState } from 'react';
import Deck from './Deck';
import Spread from './Spread';
import {Decks, Spreads, } from './tarot';

import styles from './Board.module.css';

const Board = () => {
  console.log(`Board:render`);

  const canvasRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(Decks.RIDER_WAITE_TAROT);
  const [spread, setSpread] = useState(Spreads.CELTIC);

  const [width, setWidth] = useState(Math.floor(window.innerWidth * 0.9));
  const [height, setHeight] = useState(Math.floor(window.innerHeight * 0.9));

  console.log(`Board:render ${JSON.stringify(cards.map(card => card.name))}`);

  const drawCard = () => {
    if (spread.isComplete(deck.drawn.length)) { return; }
    const newCard = deck.drawCard();
    console.log(`Board:drawCard ${JSON.stringify(deck.drawn.map(card => card.name))}`)
    setCards(deck.drawn.slice());
  };

  return <div className={styles.board}>
    <canvas ref={canvasRef} className={styles.canvas} width={width} height={height}/>
    <Deck {...{canvasRef, deck, drawCard}} position={spread.getDeckPosition(width, height)}/>
    <Spread {...{canvasRef, width, height, spread, deck, cards}} />
  </div>;
};

export default Board;