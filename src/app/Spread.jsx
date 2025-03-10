import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import Card from './Card';
import {AspectRatio} from './render';

import styles from './Spread.module.css';

const Spread = ({className, spread, deck, cards, hoverCard, setHoverCard, setSelectedCard}) => {
  const divRef = useRef(null);
  const spreadCls = classNames(styles.spread, className, {});

  const [size, setSize] = useState({ width: 800, height: 600 });

  useEffect(() => {
    const updateSize = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize(); // Initial size on mount
    window.addEventListener('resize', updateSize); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateSize); // Clean up listener
    };
  }, [divRef.current]);

  const cardHeight = size.height * 0.3;
  const cardWidth = cardHeight * AspectRatio.TAROT;

  const clickCard = card => event => {
    setSelectedCard(card);
    event.stopPropagation();
  };

  return <div ref={divRef} className={spreadCls}>
    <style>{spread.getStyles(styles.card, size.width, size.height, 1, cardWidth, cardHeight)}</style>
    {
      cards.map((card, idx) => {
        return <Card
          key={card.name}
          className={styles.card}
          hover={hoverCard && card.key == hoverCard.key}
          onClick={clickCard(card)}
          onMouseEnter={() => setHoverCard(card)}
          onMouseLeave={() => setHoverCard(null)}
          {...{deck, card, setHoverCard}} />;
      })
    }
  </div>;
};

export default Spread;