'use client'

import React, { useRef, useEffect } from 'react';
import Card from './Card';
import {Position, AspectRatio, Rotations, getCardSize, clearCanvas, renderDetail} from './render';

import styles from './CardDetail.module.css';

export const CardDetail = ({deck, card, width, height, setSelectedCard}) => {
  const canvasRef = useRef(null);

  const inset = Math.min(width * 0.05, height * 0.05);
  const radius = inset * 0.7;
  const baseWidth = width - inset * 2;
  const baseHeight = height - inset * 2;

  const frameHeight = baseHeight / baseWidth <= 0.75 ?
    baseHeight : baseWidth * 3 / 4;
  const frameWidth = frameHeight * 4 / 3;
  const frameX = (width - frameWidth) / 2;
  const frameY = (height - frameHeight) / 2;

  const cardHeight = frameHeight - inset * 2;
  const cardWidth = cardHeight * AspectRatio.TAROT;
  const cardX = frameX + cardWidth / 2 + inset;
  const cardY = frameY + cardHeight / 2 + inset;

  const detailConfig = {
    x: frameX,
    y: frameY,
    width: frameWidth,
    height: frameHeight,
    inset,
    radius
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    console.log(`CardDetail:render ${card ? card.name : 'none'}`);

    canvas.addEventListener('click',event => {
      const {top, left} = canvas.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      const inFrame = Math.abs(x - width / 2) < frameWidth / 2 && 
        Math.abs(y - height / 2) < frameHeight / 2;

      if (!inFrame) {
        setSelectedCard(null);
      }
    });

    if (card) {
      renderDetail(canvas, card, detailConfig);
    } else {
      clearCanvas(canvas);
    }
  }, [canvasRef, deck, card, height, width, ]);

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