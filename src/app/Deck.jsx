'use client'

import React, {useContext} from 'react';
import classNames from 'classnames';

import {BoardContext} from './contexts';

import styles from './Deck.module.css';

export const Deck = ({className, style, position, onClick}) => {
  const {deck, } = useContext(BoardContext);
  const deckCls = classNames(styles.introduction, className, {});
  return <img 
    className={deckCls}
    src={deck.getCardImageSrc('back.png')}
    {...{onClick, style}}
  />;
};

export default Deck;