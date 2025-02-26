import React, { useEffect } from 'react';
import {drawCard} from './tarot';
import {loadImage, renderCard} from './render';

const Deck = ({canvasRef, cards, deck, position, setCards}) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = loadImage('/images/back.png')
      .then(
        image => renderCard(context, image, position), 
        e => console.error('Deck image load failed', e));
  }, [canvasRef.current, position]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.addEventListener('click', function(event) {
      const clickX = event.clientX - canvas.offsetLeft;
      const clickY = event.clientY - canvas.offsetTop;

      // Handle the click event at coordinates (x, y)
      if (Math.abs(x - clickX) <= width / 2 && Math.abs(y - clickY) <= height / 2 ) {
        console.log('Deck clicked at:', clickX, clickY);

        const newCard = deck.drawCard();

        setCards([newCard, ...cards]);
      }
    });
  }, [canvasRef.current]);

  return <div/>;
};

export default Deck;