'use client'

import React, { useRef, useEffect } from 'react';
import Card from './Card';
import {Position, Rotations, getCardSize, clearCanvas, renderDetail} from './render';

import styles from './CardDetail.module.css';

export const CardDetail = ({deck, card, width, height, setSelectedCard}) => {
  const canvasRef = useRef(null);

  const insetX = width * 0.05;
  const insetY = height * 0.05;
  const frameRadius = Math.min(insetX, insetY);
  const baseWidth = width - insetX * 2;
  const baseHeight = height - insetY * 2;

  const frameHeight = baseHeight / baseWidth <= 0.75 ?
    baseHeight : baseWidth * 3 / 4;
  const frameWidth = frameHeight * 4 / 3;
  const frameX = (width - frameWidth) / 2;
  const frameY = (height - frameHeight) / 2;

  useEffect(() => {
    const canvas = canvasRef.current;

    console.log(`CardDetail:render ${card ? card.name : 'none'}`);

    if (card) {
      renderDetail(canvas, frameX, frameY, frameWidth, frameHeight, frameRadius);
    } else {
      clearCanvas(canvas);
    }
  }, [canvasRef, deck, card, height, width, ]);

  const {width: cardWidth, height: cardHeight, padX, padY} = getCardSize(width, height);
  const cardX = frameX + padX + insetX;
  const cardY = frameY + padY + insetY;
  const cardPosition = new Position(cardX, cardY, cardWidth, cardHeight, Rotations.UPRIGHT,);

  return card && <div className={styles.cardDetail}>
    <canvas ref={canvasRef} className={styles.canvas} width={width} height={height}/>
    <Card
        canvasRef={canvasRef}
        deck={deck}
        card={card}
        position={cardPosition} />
  </div>;
};

export default CardDetail;