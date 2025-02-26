import React from 'react';

const Spread = ({canvasRef, pattern, cards}) => {
  return <div>{
    cards.map((card, idx) => 
      <Card canvasRef={canvasRef} card={card} position={pattern.getCardPosition(idx)} />)
  }</div>;
};

export default Spread;