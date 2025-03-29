import { createContext } from 'react';

export const PhaseContext = createContext({
  state: null,
  content: null,
  actions: [],
  next: null,
  fadeOut: () => {},
  setState: () => {},
  setParameters: () => {},
});
