'use client'

import React, { useRef, useEffect } from 'react';
import { loadImage, renderCard } from './render';

import styles from './Card.module.css';

const Card = ({canvasRef, deck, card, position, hover}) => {
  useEffect(() => {
    const canvas = canvasRef.current;

    //console.log(`Card:render ${card.name}`);

    loadImage(deck.getCardImage(card))
      .then(image => renderCard(canvas, image, position, hover));
  }, [canvasRef, card.imageSrc, position]);

  return <div className={styles.card}/>;
};

export default Card;