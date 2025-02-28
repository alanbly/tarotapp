import React from 'react';
import Card from './Card';

import styles from './Spread.module.css';

const Spread = ({canvasRef, width, height, spread, deck, cards}) => {
  console.log(`Spread:render ${JSON.stringify(cards.map(card => card.name))}`)

  return <div className={styles.spread}>{
    cards.map((card, idx) => 
      <Card key={card.name} canvasRef={canvasRef} deck={deck} card={card} position={spread.getCardPosition(width, height, idx)} />)
  }</div>;
};

export default Spread;