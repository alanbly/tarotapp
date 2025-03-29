'use client'

import React, {useEffect, useRef, useState} from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import SwirlingMist from '../common/SwirlingMist';

import styles from './Veil.module.css';

const fadeDelayS = 1;
export const Veil = ({nextState, fadeIn = false, fadeOut = true, }) => {
  const { user, error, isLoading } = useUser();
  const [alpha, setAlpha] = useState(fadeIn ? 0 : 1.0);

  console.log(`Show veil ${JSON.stringify({ user, error, isLoading })}`);

  const clearVeil = () => {
    console.log('clearVeil');
    if(!user && !isLoading) {
      console.log('Redirect to login ');
      window.location.href = '/api/auth/login';
      return;
    }

    setAlpha(0);
    setTimeout(nextState, fadeDelayS * 1000 + 10);
  }

  useEffect(() => {
    console.log(`Veil:useEffect`)
    if (error) {
      console.log(`Authentication failure`)
    }
    if (fadeOut) {
      clearVeil();
    } else {
      setAlpha(1.0);
    }
  }, [fadeOut, user, error, isLoading]);

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