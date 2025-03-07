'use client'

import React from 'react';
import classNames from 'classnames';

import styles from './Deck.module.css';

export const Deck = ({className, deck, position, drawCard}) => {
  const deckCls = classNames(styles.introduction, className, {});
  return <img 
    className={deckCls}
    src={deck.getCardImageSrc('back.png')}
    onClick={drawCard}
  />;
};

export default Deck;