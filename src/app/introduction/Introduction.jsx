'use client'

import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import parse from 'html-react-parser';

import Card from '../Card';
import Deck from '../Deck';
import Veil from './Veil';
import {Action, Phase, PhasedOverlay, SwirlingMist} from '../common';
import {BoardContext, PhaseContext} from '../contexts';
import {Cards, Genders, Ranks, Suits, } from '../tarot';
import {AspectRatio} from '../render';

import styles from './Introduction.module.css';

const IntroContext = createContext({
  gender: null,
  rank: null,
  significator: null,
  suit: null,
  setGender: () => {},
  setRank: () => {},
  setSignificator: () => {},
  setSuit: () => {},
});

export const States = Object.freeze({
  VEIL: Symbol('VEIL'),
  INITIAL: Symbol('INITIAL'),
  EXPLAIN_SIGNIFICATOR: Symbol('EXPLAIN_SIGNIFICATOR'),
  CHOOSE_SIGNIFICATOR_GENDER: Symbol('CHOOSE_SIGNIFICATOR_GENDER'),
  CHOOSE_SIGNIFICATOR_RANK: Symbol('CHOOSE_SIGNIFICATOR_RANK'),
  CHOOSE_SIGNIFICATOR_SUIT: Symbol('CHOOSE_SIGNIFICATOR_SUIT'),
  CHOOSE_SIGNIFICATOR_REVEAL: Symbol('CHOOSE_SIGNIFICATOR_REVEAL'),
  CHOOSE_SIGNIFICATOR_CUT: Symbol('CHOOSE_SIGNIFICATOR_CUT'),
  EXPLAIN_QUESTION: Symbol('EXPLAIN_QUESTION'),
  CUT_CARDS: Symbol('CUT_CARDS'),
  PART: Symbol('PART'),
  //: Symbol(''),
});

const fadeDelayS = 1;
const ChooseSignificator = ({className, cards, text, selectCard}) => {
  const {
    deck,
  } = useContext(BoardContext);
  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    setAlpha(1.0);
  }, [text]);

  const transition = card => {
    setAlpha(0);
    setTimeout(() => selectCard(card), fadeDelayS * 1000 + 10);
  }

  const divCls = classNames(styles.significator, className);

  const style = {
    opacity: alpha,
  };

  return <div className={divCls} style={style}>
    <span className={styles.text}>{parse(text)}</span>
    <div className={styles.cards} >
      {cards.map(card => <Card
        key={card.name}
        className={styles.card}
        deck={deck}
        card={card}
        onClick={() => transition(card)} />)}
    </div>
  </div>;
};

const genderCards = Object.freeze([
  Cards.EMPRESS,
  Cards.WHEEL_OF_FORTUNE,
  Cards.MAGICIAN,
  Cards.EMPEROR
]);
const genderMap = Object.freeze({
  [Cards.EMPRESS.key]: Genders.FEMALE,
  [Cards.WHEEL_OF_FORTUNE.key]: Genders.PANGENDER,
  [Cards.MAGICIAN.key]: Genders.AGENDER,
  [Cards.EMPEROR.key]: Genders.MALE,
});

const ChooseSignificatorGender = params => {
  const {
    setGender,
    setRank,
  } = useContext(IntroContext);
  const {setState} = useContext(PhaseContext);

  const selectCard = card => {
    const gender = genderMap[card.key];
    setGender(gender);
    if(gender === Genders.AGENDER) {
      setRank(Ranks.ACE);
      setState(States.CHOOSE_SIGNIFICATOR_SUIT);
    } else if(gender === Genders.PANGENDER) {
      setState(States.CHOOSE_SIGNIFICATOR_CUT);
    } else {
      setState(States.CHOOSE_SIGNIFICATOR_RANK);
    }
  };

  return <ChooseSignificator 
    {...{...params, selectCard}}
    text={`These cards represent gender. None of these will be your Significator, but these cards will guide us to them. Choose the one that speaks most closely to your nature.`}
    cards={genderCards}
  />;
};

const rankCards = Object.freeze({
  [Genders.MALE]: [Cards.FOOL, Cards.CHARIOT],
  [Genders.FEMALE]: [Cards.STRENGTH, Cards.WORLD],
});
const rankMap = Object.freeze({
  [Cards.STRENGTH.key]: Ranks.PAGE,
  [Cards.FOOL.key]: Ranks.KNIGHT,
  [Cards.WORLD.key]: Ranks.QUEEN,
  [Cards.CHARIOT.key]: Ranks.KING,
})

const ChooseSignificatorRank = params => {
  const {
    gender,
    setRank,
  } = useContext(IntroContext);
  const {setState} = useContext(PhaseContext);
  const cards = rankCards[gender];

  const selectCard = card => {
    setRank(rankMap[card.key]);
    setState(States.CHOOSE_SIGNIFICATOR_SUIT);
  };

  return <ChooseSignificator 
    {...{...params, selectCard}}
    text={`These cards represent rank and maturity. Again, these will not be the cards to stand for you in the reading. Select the card that resonates with your personal stature and growth.`}
    cards={cards}
  />;
};

const suitCards = [
  Cards.SEVEN_OF_WANDS,
  Cards.FOUR_OF_CUPS,
  Cards.FIVE_OF_SWORDS,
  Cards.SIX_OF_PENTACLES,
];

const ChooseSignificatorSuit = params => {
  const {
    setSuit,
  } = useContext(IntroContext);
  const {setState} = useContext(PhaseContext);

  const selectCard = card => {
    setSuit(card.suit);
    setState(States.CHOOSE_SIGNIFICATOR_REVEAL);
  };

  return <ChooseSignificator 
    {...{...params, selectCard}}
    text={`These cards represent core mitivation and experience. Each of these Decans is a member of the suit that will provide context for the reading. This is the last choice before the Significator is revealed. Choose the one that matches your core nature.`}
    cards={suitCards}
  />;
};

const deckPathStyle = (width, height, fraction) => {
  const radius = 5 * Math.max(width, height);
  const centerY = height * 0.3 + radius;
  const baseAngle = Math.asin( 0.8 * width / (2 * radius) );
  const arcAngle = 2 * baseAngle;
  const theta = -baseAngle + fraction * arcAngle;
  const offsetX = 0.15 * height * AspectRatio.TAROT;

  const top = centerY - Math.cos(theta) * radius;
  const left = width / 2 + Math.sin(theta) * radius - offsetX;
  const transform = `rotate(${theta}rad)`;

  return {
    top, left, transform,
  };
};

const CardFan = ({className, text, action}) => {
  const {deck} = useContext(BoardContext);
  const {setState} = useContext(PhaseContext);
  const divRef = useRef(null);
  const [alpha, setAlpha] = useState(0);
  const [shown, setShown] = useState(0);
  const [size, setSize] = useState({ width: 800, height: 600 });
  const [position, setPosition] = useState(0.0);

  useEffect(() => {
    const updateSize = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        setSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize(); // Initial size on mount
    window.addEventListener('resize', updateSize); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateSize); // Clean up listener
    };
  }, [divRef.current]);

  const cardCount = 1.0 * deck.undrawn.length;

  useEffect(() => {
    setAlpha(1.0);

    deck.shuffle();

    const driver = {position};
    const intervalID = setInterval(() => {
      driver.position += 0.8 / deck.undrawn.length;
      const position = Math.min(1.0, driver.position)
      setPosition(position);
      setShown(1 + Math.floor(position * cardCount));
    }, 10);

    return () => clearInterval(intervalID)
  }, []);

  const style = {
    opacity: alpha,
  };

  const deckStyle = deckPathStyle(size.width, size.height, position);

  const divCls = classNames(styles.cut, className);

  return <div ref={divRef} className={divCls} style={style}>
    <span className={styles.text}>{text}</span>
    {[...Array(shown).keys()].map((_, idx) => {
      const cardStyle = deckPathStyle(size.width, size.height, idx/cardCount);
      return <Deck 
        key={idx}
        className={styles.deck}
        style={cardStyle}
        onClick={() => action(idx)}
      />;
    })}
    <Deck className={styles.deck} {...{deck}} style={deckStyle}/>
  </div>;
};

const ChooseSignificatorCut = params => {
  const {
    deck,
  } = useContext(BoardContext);
  const {
    setSignificator,
  } = useContext(IntroContext);
  const {setState} = useContext(PhaseContext);

  const chooseCard = idx => {
    const significator = deck.undrawn[idx];
    setSignificator(significator);
    setState(States.CHOOSE_SIGNIFICATOR_REVEAL);
  };

  return <CardFan
    text={`${Cards.WHEEL_OF_FORTUNE.name}. Then we must let fate decide for us...`}
    action={chooseCard}
    {...params}
  />
}

const significatorMap = Object.freeze({
  [Genders.MALE]: Object.freeze({
    [Ranks.KNIGHT.key]: Object.freeze({
      [Suits.WANDS.key]:     Cards.KNIGHT_OF_WANDS,
      [Suits.CUPS.key]:      Cards.KNIGHT_OF_CUPS,
      [Suits.SWORDS.key]:    Cards.KNIGHT_OF_SWORDS,
      [Suits.PENTACLES.key]: Cards.KNIGHT_OF_PENTACLES,
    }),
    [Ranks.KING.key]: Object.freeze({
      [Suits.WANDS.key]:     Cards.KING_OF_WANDS,
      [Suits.CUPS.key]:      Cards.KING_OF_CUPS,
      [Suits.SWORDS.key]:    Cards.KING_OF_SWORDS,
      [Suits.PENTACLES.key]: Cards.KING_OF_PENTACLES,
    }),
  }),
  [Genders.AGENDER]: Object.freeze({
    [Ranks.ACE.key]: Object.freeze({
      [Suits.WANDS.key]:     Cards.ACE_OF_WANDS,
      [Suits.CUPS.key]:      Cards.ACE_OF_CUPS,
      [Suits.SWORDS.key]:    Cards.ACE_OF_SWORDS,
      [Suits.PENTACLES.key]: Cards.ACE_OF_PENTACLES,
    }),
  }),
  [Genders.FEMALE]: Object.freeze({
    [Ranks.PAGE.key]: Object.freeze({
      [Suits.WANDS.key]:     Cards.PAGE_OF_WANDS,
      [Suits.CUPS.key]:      Cards.PAGE_OF_CUPS,
      [Suits.SWORDS.key]:    Cards.PAGE_OF_SWORDS,
      [Suits.PENTACLES.key]: Cards.PAGE_OF_PENTACLES,
    }),
    [Ranks.QUEEN.key]: Object.freeze({
      [Suits.WANDS.key]:     Cards.QUEEN_OF_WANDS,
      [Suits.CUPS.key]:      Cards.QUEEN_OF_CUPS,
      [Suits.SWORDS.key]:    Cards.QUEEN_OF_SWORDS,
      [Suits.PENTACLES.key]: Cards.QUEEN_OF_PENTACLES,
    }),
  }),
});

const ChooseSignificatorReveal = ({
  ...params
}) => {
  const {
    gender,
    rank,
    significator: chosen,
    suit,
    setSignificator,
  } = useContext(IntroContext);
  const {setState} = useContext(PhaseContext);

  const selectCard = card => {
    setSignificator(card);
    setState(States.EXPLAIN_QUESTION);
  };

  const significator = chosen || significatorMap[gender][rank.key][suit.key];

  return <ChooseSignificator 
    {...{...params, selectCard}}
    text={`Your choices have led us to ${significator.name}. Would you have this card as your Significator?`}
    cards={[significator]}
  />;
};

const CutCards = params => {
  const {deck} = useContext(BoardContext);
  const {setState} = useContext(PhaseContext);

  const cutCards = idx => {
    deck.cut(idx);
    setState(States.PART);
  };

  return <CardFan
    text={`Cut the deck, and the reading can begin.`}
    action={cutCards}
    {...params}
  />
}

const PartVeil = ({className, }) => {
  const {fadeOut} = useContext(PhaseContext);

  const [alpha, setAlpha] = useState(0);

  useEffect(() => {
    requestAnimationFrame(() => {
      setAlpha(1.0);
    })

    setTimeout(() => {
      setAlpha(0);
      fadeOut();
    }, 1000);
  }, []);

  const style = {
    opacity: alpha,
  };

  const spanCls = classNames(styles.text, styles.single);


  return <div className={className} style={style}>
    <span className={spanCls}>The Veil Parts...</span>
  </div>;
};

const introduction = Object.freeze([
  Object.freeze(new Phase(States.VEIL, Veil, [], States.INITIAL)),
  Object.freeze(new Phase(States.INITIAL, 
    `Would you pierce the veil to glimpse the mysteries beyond?`, [
    new Action('No', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('I Would', false, States.EXPLAIN_SIGNIFICATOR),
  ])),
  Object.freeze(new Phase(States.EXPLAIN_SIGNIFICATOR, 
    `Well then we shall let the cards speak if they will...<br>You must decide who you are and what you would ask. As the Querent, you must choose a Significator to stand for you. This is the most critical decision you will make in the reading of the cards.`, [
    new Action('Leave Now', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('Continue', false, States.CHOOSE_SIGNIFICATOR_GENDER),
  ])),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR_GENDER, ChooseSignificatorGender)),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR_RANK, ChooseSignificatorRank)),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR_SUIT, ChooseSignificatorSuit)),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR_CUT, ChooseSignificatorCut)),
  Object.freeze(new Phase(States.CHOOSE_SIGNIFICATOR_REVEAL, ChooseSignificatorReveal)),
  Object.freeze(new Phase(States.EXPLAIN_QUESTION, `You have chosen your Significator, now you must ask the cards for their favor. The Question can be nothing but the truest expression of your needs. The cards do not brook frivolity. Form the question in your mind and hold onto it tightly.`, [
    new Action('Abandon the Reading', true, States.VEIL, {fadeIn: true, fadeOut: false}),
    new Action('I Have It', false, States.CUT_CARDS),
  ])),
  Object.freeze(new Phase(States.CUT_CARDS, CutCards)),
  Object.freeze(new Phase(States.PART, PartVeil)),
].reduce((obj, phase) => {
  obj[phase.state] = phase;
  return obj;
}, {}));

export const Introduction = ({
  className,
  savedSignificator,
}) => {
  const {
    deck,
    setCards,
    setSelectedCard
  } = useContext(BoardContext);
  const [gender, setGender] = useState();
  const [rank, setRank] = useState(null);
  const [suit, setSuit] = useState(null);
  const [significator, setSignificator] = useState(savedSignificator);

  const initialState = significator ? 
    States.CHOOSE_SIGNIFICATOR_REVEAL : 
    States.VEIL;

  const partVeil = () => {
    deck.pullCard(significator);
    setCards(deck.drawn.slice());
  }

  const overlayCls = classNames(styles.introduction, className, {});
  return <IntroContext value={{
      gender,
      rank,
      significator,
      suit,
      setGender,
      setRank,
      setSignificator,
      setSuit,
    }}>
    <PhasedOverlay 
      className={overlayCls}
      states={States}
      phases={introduction}
      onComplete={partVeil}
      onBackgroundClick={() => setSelectedCard(null)}
      {...{
        initialState,
      }}
    />
  </IntroContext>;
};

export default Introduction;