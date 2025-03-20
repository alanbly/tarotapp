'use client'

import React, {useEffect, useRef, useState} from 'react';

import SwirlingMist from '../common/SwirlingMist';

import styles from './Veil.module.css';

const fadeDelayS = 1;
export const Veil = ({nextState, fadeIn = false, fadeOut = true, }) => {
  const [alpha, setAlpha] = useState(fadeIn ? 0 : 1.0);

  const clearVeil = () => {
    setAlpha(0);
    setTimeout(nextState, fadeDelayS * 1000 + 10);
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

export default Veil;