import React from 'react';
import Card from './Card';

import styles from './Spread.module.css';

const Spread = ({canvasRef, width, height, spread, deck, cards, hoverCard}) => {
  return <div className={styles.spread}>{
    cards.map((card, idx) => 
      <Card
        key={card.name}
        canvasRef={canvasRef}
        deck={deck}
        card={card}
        position={spread.getCardPosition(width, height, idx)}
        hover={hoverCard && card.key == hoverCard.key} />)
  }</div>;
};

export default Spread;