'use client'

import React, { useEffect } from 'react';
import {loadImage, renderCard} from './render';

import styles from './Deck.module.css';

export const Deck = ({canvasRef, deck, position, drawCard}) => {
  useEffect(() => {
    console.log('Deck canvas or position update')
    const canvas = canvasRef.current;
    const image = loadImage(deck.getCardImage('back.png'))
      .then(
        image => renderCard(canvas, image, position),
        e => console.error('Deck image load failed', e));
  }, [canvasRef, position]);

  useEffect(() => {
    console.log('Deck canvas change');
    const canvas = canvasRef.current;
    canvas.addEventListener('click', function(event) {
      const clickX = event.clientX - canvas.offsetLeft;
      const clickY = event.clientY - canvas.offsetTop;

      // Handle the click event at coordinates (x, y)
      if (Math.abs(position.x - clickX) <= position.width / 2 && Math.abs(position.y - clickY) <= position.height / 2 ) {
        console.log('Deck clicked at:', clickX, clickY);
        drawCard();
      }
    });
  }, [canvasRef]);

  return <div className={styles.deck}/>;
};

export default Deck;