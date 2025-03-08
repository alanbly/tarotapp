'use client'

import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';


import SwirlingMist from './SwirlingMist';
import {Action, Phase, States} from './tarot';

import styles from './Introduction.module.css';

const Actions = ({actions, state, onClickAction}) => {
  return <div className={styles.actions}>
    {actions.map((action, idx) => {
      const {text, primary} = action;
      const buttonCls = classNames(styles.action, {
        [styles.primary]: primary,
      });
      return <button
        key={`${state.name}-${idx}`}
        className={buttonCls}
        onClick={() => onClickAction(action)}>
        {text}
      </button>;
    })}
  </div>;
};

const TextPhase = ({text, actions, state, setState, setParameters}) => {
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setAlpha(1.0);
    })
  }, [text]);

  const style = {
    opacity: alpha,
  };

  const onClickAction = action => {
    setAlpha(0);
    setTimeout(() => {
      setState(action.targetState);
      setParameters(action.parameters || {});
    }, 1000);
  };

  return <div className={styles.phase} style={style}>
    <span className={styles.text}>{parse(text)}</span>
    <Actions {...{actions, state, onClickAction}}/>
  </div>;
};

const fadeDelayS = 5;
const Veil = ({fadeIn = false, fadeOut = true, setState}) => {
  const [alpha, setAlpha] = useState(fadeIn ? 0 : 1.0);

  const clearVeil = () => {
    setAlpha(0);
    setTimeout(() => setState(States.INITIAL), fadeDelayS * 1000 + 10);
  }

  useEffect(() => {
    if (fadeOut) {
      clearVeil();
    } else {
      setAlpha(1.0);
    }
  }, [fadeOut]);
  const style = {
    opacity: alpha,
    transitionDuration: `${fadeDelayS}s`,
  };
  return <SwirlingMist
    className={styles.veil}
    onClick={clearVeil}
    {...{style}}/>;
};

const ChooseSignificator = ({}) => {
  return <div className={styles.phase}></div>;
};

const CutCards = ({}) => {
  return <div className={styles.phase}></div>;
};

const introduction = Object.freeze([
  Object.freeze(new Phase(States.VEIL, Veil, [])),
  Object.freeze(new Phase(States.INITIAL, 
    `Would you pierce the veil to glimpse the mysteries beyond?`, [
    new Action('No', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('I Would', false, States.EXPLAIN_SIGNIFICATOR),
  ])),
  Object.freeze(new Phase(States.EXPLAIN_SIGNIFICATOR, 
    `Well then we shall let the cards speak if they will...<br>You must decide who you are and what you would ask. As the Querent, you must choose a Significator to stand for you. This is the most critical decision you will make in the reading of the cards.`, [
    new Action('Leave Now', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('Continue', false, States.CHOOSE_SIGNIFICATOR),
  ])),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR, ChooseSignificator, [
    new Action('(skip)', false, States.EXPLAIN_QUESTION),
  ])),
  Object.freeze(new Phase(States.EXPLAIN_QUESTION, `You have chosen your Significator, now you must ask the cards for their favor. The Question can be nothing but the trues expression of your needs. The cards do not brook frivolity. Form the question in your mind and hold onto it tightly.`, [
    new Action('Abandon the Reading', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('I Have It', false, States.CUT_CARDS),
  ])),
  Object.freeze(new Phase(States.CUT_CARDS, CutCards, [
    new Action('(skip)', false, States.PART),
  ])),
  Object.freeze(new Phase(States.PART, CutCards, [])),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Introduction = ({className, deck, setCards, setSelectedCard, initialState = States.VEIL}) => {
  const [state, setState] = useState(initialState);
  const [parameters, setParameters] = useState({});
  const [rank, setRank] = useState(null);
  const [suit, setSuit] = useState(null);

  const phase = introduction[state];
  const Component = phase.content;

  const divCls = classNames(styles.introduction, className, {});
  return <div className={divCls}>
    <SwirlingMist
      className={styles.background}
      onClick={() => setSelectedCard(null)}/>
    {typeof phase.content === 'string' ?
      <TextPhase text={phase.content} {...{...phase, setState, setParameters}} /> :
      <Component {...{
        deck,
        setState,
        setCards,
        setSelectedCard,
        setState,
        setParameters,
        ...phase,
        ...parameters,
      }}/>}

  </div>;
};

export default Introduction;