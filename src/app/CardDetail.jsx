'use client'

import React from 'react';
import Card from './Card';
import {Position, AspectRatio, Rotations, getCardSize, clearCanvas, renderDetail} from './render';

import styles from './CardDetail.module.css';

export const CardDetail = ({deck, card}) => {

  return <div className={styles.cardDetail} onClick={event => event.stopPropagation()}>
    <Card
      className={styles.card}
      deck={deck}
      card={card} />
    <div className={styles.textBlock}>
      <h1 className={styles.title}>{card.name}</h1>
      {card.interpretation.split("\n").map((text, idx) => 
        <p key={`${card.name}-p-${idx}`} className={styles.text}>{text}</p>)
      }
    </div>
  </div>;
};

export default CardDetail;