'use client'

import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

import {Action, Phase, PhasedOverlay, SwirlingMist} from './common';

import styles from './Interpretation.module.css';

const States = Object.freeze({
  OVERLAY: Symbol('OVERLAY'),
  EXPLAIN: Symbol('EXPLAIN'),
  READING: Symbol('READING'),
});

const ActionOverlay = ({reset}) => {
  return <div className={styles.actions}/>
};

const interpretation = Object.freeze([
  Object.freeze(new Phase(States.OVERLAY, `ActionOverlay`, [
    new Action('Explain the Cards', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('Read the Spread', false, States.EXPLAIN_SIGNIFICATOR),
  ])),
  Object.freeze(new Phase(States.EXPLAIN, `EXPLAIN.`, [], States.READING)),
  Object.freeze(new Phase(States.READING, `READING.`, [])),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Interpretation = ({
  className,
  deck,
  setCards,
  setSelectedCard,
  reset,
  initialState = States.OVERLAY,
}) => {
  const [bgAlpha, setBgAlpha] = useState(0);

  const onComplete = () => {

  }

  const overlayCls = classNames(styles.interpretation, className, {});
  return <PhasedOverlay 
    className={overlayCls}
    states={States}
    phases={interpretation}
    backgroundOpacity={bgAlpha}
    onBackgroundClick={() => {}}
    {...{
      initialState,
      onComplete,
      setBgAlpha,
      reset,
    }}
  />;
};

export default Interpretation;