'use client'

import { useUser } from '@auth0/nextjs-auth0/client';
import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';
import Markdown from 'react-markdown';

import {
  Action,
  MarkdownPhase,
  Phase,
  PhasedOverlay,
  SwirlingMist,
  TextPhase,
} from './common';
import {BoardContext, PhaseContext} from './contexts';

import styles from './Interpretation.module.css';

const InterpretationContext = createContext({
  setBgAlpha: () => {},
  setExplain: () => {},
  setAdvise: () => {},
});

const States = Object.freeze({
  HIDDEN: Symbol('HIDDEN'),
  LOADING: Symbol('LOADING'),
  OVERLAY: Symbol('OVERLAY'),
  EXPLAIN: Symbol('EXPLAIN'),
  READING: Symbol('READING'),
  ERROR: Symbol('ERROR'),
});

const Blank = ({className}) => {
  const {
    cards,
    spread,
  } = useContext(BoardContext);
  const {
    setBgAlpha,
  } = useContext(InterpretationContext);
  const {setParameters, setState} = useContext(PhaseContext);

  const { user } = useUser();

  useEffect(() => {
    setBgAlpha(0);

    // Don't move to interpretation unless logged in and spread is complete
    if (!user || !spread.isComplete(cards)) {
      return;
    }

    console.log('Consulting the Seer...');
    setState(States.LOADING);
  }, [cards, spread, user]);

  const divCls = classNames(className, styles.blank);
  return <div className={divCls}/>
};

const ReadingLoader = ({
  className,
}) => {
  const {
    cards,
    deck,
    spread,
  } = useContext(BoardContext);
  const {setState} = useContext(PhaseContext);
  const {
    setBgAlpha,
    setExplain,
    setAdvise
  } = useContext(InterpretationContext);

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
        .then(() => setState(States.OVERLAY))
        .catch((error) => {
          setParameters({error});
          setState(States.ERROR);
        });
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
}) => {
  const {
    setActions,
  } = useContext(BoardContext);
  const {
    explain,
    advise,
    setBgAlpha,
  } = useContext(InterpretationContext);
  const {setState} = useContext(PhaseContext);
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

const Explanation = params => {
  const {
    explain,
  } = useContext(InterpretationContext);

  return <MarkdownPhase
    className={styles.markdown}
    markdown={explain}
    {...params}
  />
};

const Reading = params => {
  const {
    advise,
  } = useContext(InterpretationContext);

  return <MarkdownPhase
    className={styles.markdown}
    markdown={advise}
    {...params}
  />
};

const ErrorView = ({error, ...params}) => {
  return <TextPhase text='The veil has been closed to you.' {...params} />
}

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
  Object.freeze(new Phase(States.ERROR, ErrorView, [
    new Action('Try Again', true, States.HIDDEN, {forceReauth: true}),
  ])),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Interpretation = ({
  className,
  initialState = States.HIDDEN,
}) => {
  const {
    cards,
    deck,
    spread,
    setActions,
    reset,
  } = useContext(BoardContext);

  const [bgAlpha, setBgAlpha] = useState(0);
  const [explain, setExplain] = useState(null);
  const [advise, setAdvise] = useState(null);

  const onComplete = () => {
    setBgAlpha(0);
    reset();
  };

  const isComplete = spread.isComplete(deck.drawn.length);

  const overlayCls = classNames(styles.interpretation, className, {});
  return <div className={styles.frame}>
    <InterpretationContext value={{
      explain,
      advise,
      setBgAlpha,
      setExplain,
      setAdvise,
    }}>
      {isComplete && <PhasedOverlay 
        className={overlayCls}
        states={States}
        phases={interpretation}
        backgroundOpacity={bgAlpha}
        onBackgroundClick={() => {}}
        {...{
          initialState,
          onComplete,
        }}
      />}
    </InterpretationContext>
  </div>
};

export default Interpretation;