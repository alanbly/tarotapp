import React, { useRef, useState } from 'react';
import Deck from './Deck';
import Spread from './Spread';
import {Decks, Spreads, } from './tarot';

const Board = () => {
  const canvasRef = useRef(null);
  const [cards, setCards] = useState([]);
  const [deck, setDeck] = useState(Decks.TAROT);
  const [spread, setPattern] = useState({getCardPosition: i => ({})});

  return <div>
    <canvas ref={canvasRef} width={500} height={300} />
    <Deck {...{canvasRef, cards, deck, setCards}} />
    <Spread {...{canvasRef, pattern, cards}} />
  </div>;
};

export default Board;