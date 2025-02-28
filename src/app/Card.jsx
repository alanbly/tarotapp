'use client'

import React, { useRef, useEffect } from 'react';
import { loadImage, renderCard } from './render';

import styles from './Card.module.css';

const Card = ({canvasRef, deck, card, position}) => {
  console.log(`Card:render ${card.name}`)
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    console.log('Card:useEffect')
    loadImage(deck.getCardImage(card))
      .then(image => renderCard(context, image, position));
  }, [canvasRef, card.imageSrc, position]);

  return <div className={styles.card}/>;
};

export default Card;