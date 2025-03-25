import React, {useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import Card from './Card';
import {BoardContext} from './contexts';
import {Facings} from './tarot';
import {AspectRatio} from './render';

import styles from './Spread.module.css';

const Spread = ({className, }) => {
  const {
    spread,
    deck,
    cards,
    hoverCard,
    setHoverCard,
    setSelectedCard
  } = useContext(BoardContext);
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

    if (divRef.current) {
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(divRef.current); // Update on div resize

      return () => {
        resizeObserver.disconnect(); // Clean up listener
      };
    }
  }, [divRef.current]);

  const cardHeight = size.height * 0.3;
  const cardWidth = cardHeight * AspectRatio.TAROT;

  const clickCard = card => event => {
    setSelectedCard(card);
    event.stopPropagation();
  };

  const facing = cards[0] && cards[0].facing;

  return <div ref={divRef} className={spreadCls}>
    <style>{spread.getStyles(styles, size.width, size.height, 1, cardWidth, cardHeight, facing)}</style>
    {
      cards.map((card, idx) => {
        return <Card
          key={card.name}
          className={styles.anchor}
          cardClass={styles.card}
          tooltipClass={styles.tooltip}
          hover={hoverCard && card.key == hoverCard.key}
          placement={spread.getCardPlacement(idx, facing)}
          onClick={clickCard(card)}
          onMouseEnter={() => setHoverCard(card)}
          onMouseLeave={() => setHoverCard(null)}
          {...{deck, card, setHoverCard}} />;
      })
    }
  </div>;
};

export default Spread;