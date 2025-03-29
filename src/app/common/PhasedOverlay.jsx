'use client'

import React, {useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';
import Markdown from 'react-markdown';

import {PhaseContext} from '../contexts';
import SwirlingMist from './SwirlingMist';

import styles from './PhasedOverlay.module.css';

export class Action {
  constructor(text, primary, onClick, parameters = {}) {
    this.text = text;
    this.primary = !!primary;
    this.onClick = typeof onClick === 'function' ? onClick : null;
    this.targetState = typeof onClick !== 'function' ? onClick : null;
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

export const Actions = ({onClickAction}) => {
  const {actions, state} = useContext(PhaseContext);

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

export const FadingPhase = ({
  className,
  children,
}) => {
  const {actions, state, setState, setParameters} = useContext(PhaseContext);

  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setAlpha(1.0);
    })
  }, [children]);

  const style = {
    opacity: alpha,
  };

  const onClickAction = action => {
    setAlpha(0);
    setTimeout(() => {
      if (action.onClick) {
        action.onClick();
      } else {
        setState(action.targetState);
      }
      setParameters(action.parameters || {});
    }, 1000);
  };

  const divCls = classNames(styles.phase, className);
  return <div className={divCls} style={style}>
    {children}
    <Actions {...{actions, state, onClickAction}}/>
  </div>;
};

export const TextPhase = ({text, className, ...params}) => {
  const phaseCls = classNames(styles.text, className);
  return <FadingPhase {...params}>
    <span className={phaseCls}>{parse(text)}</span>
  </FadingPhase>;
};

export const MarkdownPhase = ({markdown,  className, ...params}) => {
  const phaseCls = classNames(styles.markdown, className);
  return <FadingPhase className={phaseCls} {...params}>
    <div className={styles.scroller}>
      <Markdown components={{
        ul: params => <ul className={styles.list} {...params} />,
        ol: params => <ol className={styles.list} {...params} />,
        li: params => <li className={styles.item} {...params} />,
        p: params => <p className={styles.paragraph} {...params} />,
      }}>{markdown}</Markdown>
    </div>
  </FadingPhase>;
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
    pointerEvents: backgroundOpacity > 0 ? 'visible' : 'none',
  };

  const divCls = classNames(styles.overlay, className, {});
  return <div className={divCls} style={style}>
    <SwirlingMist
      className={styles.background}
      style={backgroundStyle}
      onClick={onClickBackground}/>
    <PhaseContext value={{
      ...phase,
      fadeOut,
      setState,
      setParameters,
    }}>
      {typeof phase.content === 'string' ?
        <TextPhase text={phase.content} /> :
        <Component
          nextState={() => setState(phase.next || initialState)} 
          className={styles.phase}
          {...{
            ...passThrough,
            ...parameters,
          }}
        />
      }
    </PhaseContext>

  </div>;
};

export default PhasedOverlay;