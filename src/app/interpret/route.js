import 'server-only';

import { NextResponse } from 'next/server'
import {findIndex, isNil, props} from 'ramda';

import {pushFile, performReading} from './openAi';
import {cardsByName, decksByName, spreadsByName} from '../tarot';

export const maxDuration = 30;

const explainCards = 'You are a mystical reader of the tarot. Interpret the following and explain each card';
const adviseQuerent = 'You are a mystical reader of the tarot. Give advice to a Querent based on the following in two paragraphs';

export const POST = async (req) => {
  try {
    const {cardNames, deckName, spreadName} = await req.json();

    if (!cardNames || !deckName || !spreadName) {
      console.log(`POST/interpret: POST request must include all of cardNames, deckName, and spreadName`);
      return NextResponse.json(
        {err: `POST request must include all of cardNames, deckName, and spreadName`}, 
        {status: 400});
    }

    const cards = props(cardNames, cardsByName);

    const nilIndex = findIndex(isNil, cards)
    if (nilIndex >= 0) {
      console.log(`POST/interpret: Card name '${cardNames[nilIndex]}' is not known`)
      return NextResponse.json(
        {err: `Card name '${cardNames[nilIndex]}' is not known`}, 
        {status: 400});
    }

    const deck = decksByName[deckName];
    if (!deck) {
      console.log(`POST/interpret: Deck name '${deckName}' is not known`);
      return NextResponse.json(
        {err: `Deck name '${deckName}' is not known`}, 
        {status: 400});
    }

    const spread = spreadsByName[spreadName];
    if (!spread) {
      console.log(`POST/interpret: Spread name '${spreadName}' is not known`);
      return NextResponse.json(
        {err: `Spread name '${spreadName}' is not known`}, 
        {status: 400});
    }

    // const files = await Promise.all([
    //     'a-e-waite-pictorial-key-to-the-tarot-1911-source-credit-sacredtexts.pdf',
    //     'mathers-and-felkin-golden-dawn-book-t-the-tarot-1888.pdf',
    // ].map(fileName => pushFile(fileName)));

    const [explain, advise] = await Promise.all([
      performReading(spread, deck, cards, explainCards, []), //files),
      performReading(spread, deck, cards, adviseQuerent, []), //files),
    ]);


    return NextResponse.json({explain, advise});
  } catch (e) {
    return NextResponse.json({err: `Interpretation failed. ${e.message}`}, {status: 500});
  }
}
