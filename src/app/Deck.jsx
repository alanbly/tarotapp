'use client'

import React from 'react';

import styles from './Deck.module.css';

export const Deck = ({deck, position, drawCard}) => {
  return <img 
    className={styles.deck}
    src={deck.getCardImageSrc('back.png')}
    onClick={drawCard}
  />;
};

export default Deck;