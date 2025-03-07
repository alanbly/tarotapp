'use client'

import React, {useState} from 'react';
import classNames from 'classnames';

import SwirlingMist from './SwirlingMist';
import {Action, Phase, States} from './tarot';

import styles from './Introduction.module.css';

const Initial = ({}) => {
  return <div className={styles.phase}></div>;
};

const ExplainSignificator = ({}) => {
  return <div className={styles.phase}></div>;
};

const ChooseSignificator = ({}) => {
  return <div className={styles.phase}></div>;
};

const ExplainQuestion = ({}) => {
  return <div className={styles.phase}></div>;
};

const CutCards = ({}) => {
  return <div className={styles.phase}></div>;
};

const introduction = Object.freeze([
  Object.freeze(new Phase(States.INITIAL, Initial, [])),
  Object.freeze(new Phase(States.EXPLAIN_SIGNIFICATOR, ExplainSignificator, [])),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR, ChooseSignificator, [])),
  Object.freeze(new Phase(States.EXPLAIN_QUESTION, ExplainQuestion, [])),
  Object.freeze(new Phase(States.CUT_CARDS, CutCards, [])),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Introduction = ({className, deck, setCards, setSelectedCard}) => {
  const [state, setState] = useState(States.INITIAL);

  const phase = introduction[state];
  const Component = phase.content;

  const divCls = classNames(styles.introduction, className, {});
  return <div className={divCls}>
    <SwirlingMist className={styles.background} onClick={() => setSelectedCard(null)}/>
    <Component {...{deck, setCards, setSelectedCard}}/>
    <div className={styles.actions}>
      {phase.actions.map(({text, targetState, primary}) => {
        const buttonCls = classNames(styles.action, {
          [styles.primary]: primary,
        });
        return <button
          className={buttonCls}
          onClick={() => setState(targetState)}>{text}</button>;
      })}
    </div>
  </div>;
};

export default Introduction;