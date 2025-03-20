'use client'

import React, {useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

import SwirlingMist from './SwirlingMist';

import styles from './PhasedOverlay.module.css';

export class Action {
  constructor(text, primary, targetState, parameters = {}) {
    this.text = text;
    this.primary = !!primary;
    this.targetState = targetState;
    this.parameters = parameters;
  }
}

export class Phase {
  constructor(state, content, actions, next) {
    this.state = state;
    this.content = content;
    this.actions = actions || [];
    this.next = next;
  }
}

export const Actions = ({actions, state, onClickAction}) => {
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

export const TextPhase = ({text, actions, state, setState, setParameters}) => {
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

export const PhasedOverlay = ({
  className,
  states,
  phases,
  backgroundOpacity,
  onClickBackground,
  initialState,
  onComplete,
  ...passThrough
}) => {
  const [alpha, setAlpha] = useState(1);
  const [state, setState] = useState(initialState || states[0]);
  const [parameters, setParameters] = useState({});
  const [gender, setGender] = useState();
  const [rank, setRank] = useState(null);
  const [suit, setSuit] = useState(null);
  const [significator, setSignificator] = useState(null);

  const phase = phases[state] || phases[Object.values(states)[0]];
  const Component = phase.content;

  const fadeOut = () => {
    setAlpha(0);
    setTimeout(onComplete, 1000);
  }

  const style = {
    opacity: alpha,
  };

  const backgroundStyle = {
    opacity: backgroundOpacity,
  };

  const divCls = classNames(styles.overlay, className, {});
  return <div className={divCls} style={style}>
    <SwirlingMist
      className={styles.background}
      style={backgroundStyle}
      onClick={onClickBackground}/>
    {typeof phase.content === 'string' ?
      <TextPhase text={phase.content} {...{...phase, setState, setParameters}} /> :
      <Component nextState={() => setState(phase.next || initialState)} {...{
        fadeOut,
        setState,
        ...passThrough,
        ...phase,
        ...parameters,
      }}/>}

  </div>;
};

export default PhasedOverlay;