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

const Blank = ({className, setActions, setState, setBgAlpha}) => {
  const transition = state => {
    setBgAlpha(state === States.OVERLAY ? 0 : 1);
    setState(state);
  };

  useEffect(() => {
    setBgAlpha(0);

    const actions = [
      new Action('Spread Details', false, () => transition(States.EXPLAIN)),
      new Action('Read the Cards', false, () => transition(States.READING)),
    ];

    setActions(actions);

    return () => setActions([]);
  }, []);

  const divCls = classNames(className, styles.blank);
  return <div className={divCls}/>
};

const interpretation = Object.freeze([
  Object.freeze(new Phase(States.OVERLAY, Blank, [])),
  Object.freeze(new Phase(States.EXPLAIN, `EXPLAIN.`, [
    new Action('Return', true, States.OVERLAY),
  ], States.READING)),
  Object.freeze(new Phase(States.READING, `READING.`, [
    new Action('Return', true, States.OVERLAY),
  ])),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Interpretation = ({
  className,
  cards,
  deck,
  spread,
  setActions,
  reset,
  initialState = States.OVERLAY,
}) => {
  const [bgAlpha, setBgAlpha] = useState(0);

  const onComplete = () => {
    setBgAlpha(0);
    reset();
  }

  const isComplete = spread.isComplete(deck.drawn.length);

  const overlayCls = classNames(styles.interpretation, className, {});
  return <div className={styles.frame}>
    {isComplete && <PhasedOverlay 
      className={overlayCls}
      states={States}
      phases={interpretation}
      backgroundOpacity={bgAlpha}
      onBackgroundClick={() => {}}
      {...{
        initialState,
        onComplete,
        setActions,
        setBgAlpha,
        reset,
      }}
    />}
  </div>
};

export default Interpretation;