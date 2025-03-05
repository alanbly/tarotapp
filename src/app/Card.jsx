'use client'

import React from 'react';
import classNames from 'classnames';

import styles from './Card.module.css';

const Card = ({className, deck, card, hover, onClick, onMouseEnter, onMouseLeave}) => {
  const cardCls = classNames(styles.card, className, {
    [styles.hover]: hover,
  });
  return <img 
    className={cardCls}
    src={deck.getCardImageSrc(card)}
    {...{onClick, onMouseEnter, onMouseLeave}}
  />;
}

export default Card;