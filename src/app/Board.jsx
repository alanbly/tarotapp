import React, { useRef, useState } from 'react';

const Board = () => {
  const canvasRef = useRef(null);
  const [pattern, setPattern] = useState({getCardPosition: i => ({})})
  const [cards, setCards] = useState([]);

  return <div>
    <canvas ref={canvasRef} width={500} height={300} />
    <Deck {...{canvasRef, cards, setCards}} />
    <Spread {...{canvasRef, pattern, cards}} />
  </div>;
};

export default Board;