import React, { useRef, useEffect } from 'react';
import { renderCard } from './render';

const Card = ({canvasRef, card, position}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    loadImage(card.imageSrc)
      .then(image => renderCard(context, image, position));
  }, [canvasRef.current, card.imageSrc, position]);

  return <div />;
};

export default Card;