'use client'

import React, {useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

import {BoardContext} from './contexts';

import styles from './Card.module.css';

const Tooltip = ({
  className,
  card,
  placement,
  setTooltipSize,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const {
    deck,
  } = useContext(BoardContext);
  const divRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (divRef.current) {
        setTooltipSize(divRef.current.getBoundingClientRect());
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

  const tooltipCls = classNames(styles.tooltip, className);
  const title = `${card.name} - ${card.title}`;
  const text = placement ? `In this Position: ${placement.interpretation}` : card.interpretation;
  return <div 
    ref={divRef} 
    className={tooltipCls} 
    {...{onClick, onMouseEnter, onMouseLeave}}
  >
    <span className={styles.title}>{title}</span>
    <span className={styles.text}>{parse(text)}</span>
  </div>
}

const Card = ({
  className,
  cardClass,
  tooltipClass,
  card,
  placement,
  hover,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const {
    deck,
  } = useContext(BoardContext);
  const divRef = useRef(null);
  const [right, setRight] = useState(false);
  const [tooltipSize, setTooltipSize] = useState({ width: 0 });
  const [controller, setController] = useState({hovering: 0});

  const updateSize = () => {
    if (divRef.current) {
      const anchorRect = divRef.current.getBoundingClientRect();
      const parentRect = divRef.current.parentNode.getBoundingClientRect();
      setRight(anchorRect.right + tooltipSize.width > parentRect.right);
    }
  };

  useEffect(() => {
    updateSize(); // Initial size on mount

    if (divRef.current) {
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(divRef.current); // Update on div resize

      return () => {
        resizeObserver.disconnect(); // Clean up listener
      };
    }
  }, [divRef.current]);

  useEffect(updateSize, [tooltipSize]);

  const mouseEnter = e => {
    controller.hovering += 1;
    if (onMouseEnter && controller.hovering === 1) {
      onMouseEnter(e);
    }
    setController(controller);
  };

  const mouseLeave = e => {
    controller.hovering -= 1;
    if (onMouseLeave && controller.hovering === 0) {
      onMouseLeave(e);
    }
    setController(controller);
  };

  const anchorCls = classNames(styles.anchor, className);
  const cardCls = classNames(styles.card, cardClass, {
    [styles.hover]: hover,
  });
  const tooltipCls = classNames(tooltipClass, {
    [styles.left]: right,
  })
  return <div ref={divRef} className={anchorCls} >
    <img 
      className={cardCls}
      src={deck.getCardImageSrc(card)}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...{onClick}}
    />
    {hover && <Tooltip
      className={tooltipCls}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      {...{deck, card, placement, setTooltipSize, onClick}} />}
  </div>;
}

export default Card;