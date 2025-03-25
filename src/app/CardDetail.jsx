'use client'

import React, {useContext} from 'react';
import parse from 'html-react-parser';

import Card from './Card';
import {BoardContext} from './contexts';
import {
  Position,
  AspectRatio,
  Rotations,
  getCardSize,
  clearCanvas,
  renderDetail,
} from './render';

import styles from './CardDetail.module.css';

export const CardDetail = ({card}) => {
  const {
    deck,
  } = useContext(BoardContext);

  return <div className={styles.cardDetail} onClick={event => event.stopPropagation()}>
    <Card
      className={styles.card}
      deck={deck}
      card={card} />
    <div className={styles.textBlock}>
      <h1 className={styles.title}>{card.name}</h1>
      {card.interpretation.split("\n").map((text, idx) => 
        <p key={`${card.name}-p-${idx}`} className={styles.text}>{parse(text)}</p>)
      }
    </div>
  </div>;
};

export default CardDetail;