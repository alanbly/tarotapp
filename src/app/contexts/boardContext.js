import { createContext } from 'react';

import {Cards, Decks, Spreads, } from '../tarot';

export const BoardContext = createContext({
    cards: [],
    setCards: () => {},
    deck: Decks.RIDER_WAITE_TAROT.copy(),
    setDeck: () => {},
    spread: Spreads.CELTIC,
    setSpread: () => {},

    actions: [], 
    setActions: () => {},
    selectedCard: null, 
    setSelectedCard: () => {},
    hoverCard: null, 
    setHoverCard: () => {},
    reset: () => {},
});
