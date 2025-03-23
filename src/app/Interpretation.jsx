'use client'

import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';
import Markdown from 'react-markdown';

import {Action, MarkdownPhase, Phase, PhasedOverlay, SwirlingMist} from './common';

import styles from './Interpretation.module.css';

const States = Object.freeze({
  HIDDEN: Symbol('HIDDEN'),
  LOADING: Symbol('LOADING'),
  OVERLAY: Symbol('OVERLAY'),
  EXPLAIN: Symbol('EXPLAIN'),
  READING: Symbol('READING'),
});

const Blank = ({className, cards, spread, setBgAlpha, setState}) => {
  useEffect(() => {
    setBgAlpha(0);
    if (spread.isComplete(cards)) {
      console.log('Consulting the Seer...');
      setState(States.LOADING);
    }
  }, [cards, spread]);

  const divCls = classNames(className, styles.blank);
  return <div className={divCls}/>
};

const ReadingLoader = ({className, cards, deck, spread, setBgAlpha, setState, setExplain, setAdvise}) => {
  useEffect(() => {
    setBgAlpha(0);
    if (spread.isComplete(cards)) {
      fetch('/interpret', {
        method: 'POST',
        body: JSON.stringify({
          cardNames: cards.map(card => card.name),
          deckName: deck.name,
          spreadName: spread.name,

          // This need some kind of auth eventually
        })
      })
        .then((res) => res.json())
        .then(({explain, advise}) => {
          setExplain(explain.choices[0].message.content);
          setAdvise(advise.choices[0].message.content);
        })
        .then(() => setState(States.OVERLAY));
    } else {
      console.log('Hide');
      setState(States.HIDDEN);
    }
  }, [cards, spread]);

  const divCls = classNames(className, styles.blank);
  return <div className={divCls}/>
};

const fadeDelayS = 1;
const ActionsOverlay = ({
  className,
  explain,
  advise,
  setActions,
  setState,
  setBgAlpha
}) => {
  const [alpha, setAlpha] = useState(0);

  const transition = state => {
    setAlpha(0);
    setTimeout(() => {
      setBgAlpha(1);
      setState(state);
    }, fadeDelayS * 1000);
  };

  useEffect(() => {
    setBgAlpha(0);
    setAlpha(1);

    const actions = [
      new Action('Spread Details', false, () => transition(States.EXPLAIN)),
      new Action('Read the Cards', false, () => transition(States.READING)),
    ];

    setActions(actions);

    return () => setActions([]);
  }, []);

  const style = {
    opacity: alpha,
    transitionDuration: `${fadeDelayS}s`,
  };
  const divCls = classNames(className, styles.blank);
  return <div className={divCls}/>
};

const Explanation = ({explain, ...params}) => {
  return <MarkdownPhase
    className={styles.markdown}
    markdown={explain}
    {...params}
  />
};

const Reading = ({advise, ...params}) => {
  return <MarkdownPhase
    className={styles.markdown}
    markdown={advise}
    {...params}
  />
};

const interpretation = Object.freeze([
  Object.freeze(new Phase(States.HIDDEN, Blank, [])),
  Object.freeze(new Phase(States.LOADING, ReadingLoader, [])),
  Object.freeze(new Phase(States.OVERLAY, ActionsOverlay, [])),
  Object.freeze(new Phase(States.EXPLAIN, Explanation, [
    new Action('Return', true, States.OVERLAY),
  ], States.READING)),
  Object.freeze(new Phase(States.READING, Reading, [
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
  initialState = States.HIDDEN,
}) => {
  const [bgAlpha, setBgAlpha] = useState(0);
  const [explain, setExplain] = useState(null);
  const [advise, setAdvise] = useState(null);

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
        cards,
        deck,
        advise,
        explain,
        spread,
        initialState,
        onComplete,
        setActions,
        setAdvise,
        setBgAlpha,
        setExplain,
        reset,
      }}
    />}
  </div>
};

export default Interpretation;