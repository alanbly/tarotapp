'use client'

import React, { useRef, useState, useEffect } from 'react';
import CardDetail from './CardDetail';
import Deck from './Deck';
import Spread from './Spread';
import {Decks, Spreads, } from './tarot';

import styles from './Board.module.css';

const Board = () => {
  const canvasRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(Decks.RIDER_WAITE_TAROT);
  const [spread, setSpread] = useState(Spreads.CELTIC);
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoverCard, setHoverCard] = useState(null);

  const [width, setWidth] = useState(1600);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    // client-only
    setWidth(window.innerWidth * 0.9);
    setHeight(window.innerHeight * 0.9);
  }, []);

  const getTargetCard = event => {
    const canvas = canvasRef.current;
    const moveX = event.clientX - canvas.offsetLeft;
    const moveY = event.clientY - canvas.offsetTop;

    const cardIdx = spread.findCard(width, height, moveX, moveY, deck.drawn.length);
    return cardIdx >= 0 ? deck.drawn[cardIdx] : null;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('mousemove', event =>
      setHoverCard(getTargetCard(event)));
    canvas.addEventListener('click',event =>
      setSelectedCard(getTargetCard(event)));
  }, [canvasRef]);

  const drawCard = () => {
    if (spread.isComplete(deck.drawn.length)) { return; }
    const newCard = deck.drawCard();
    console.log(`Board:drawCard ${JSON.stringify(deck.drawn.map(card => card.name))}`)
    setCards(deck.drawn.slice());
  };

  return <div className={styles.board}>
    <canvas ref={canvasRef} className={styles.canvas} width={width} height={height}/>
    <Deck {...{canvasRef, deck, drawCard}} position={spread.getDeckPosition(width, height)}/>
    <Spread {...{canvasRef, width, height, spread, deck, cards, hoverCard}} />
    <CardDetail {...{deck, height, width, card: selectedCard, setSelectedCard}}/>
  </div>;
};

export default Board;