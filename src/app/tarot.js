import {Position, Rotations, getCardSize} from './render';

export const Genders = Object.freeze({
  MALE: Symbol('MALE'),
  FEMALE: Symbol('FEMALE'),
  AGENDER: Symbol('AGENDER'),
  PANGENDER: Symbol('PANGENDER'),
});

export class Suit {
  constructor(name, interpretation) {
    this.name = name;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Suits = Object.freeze({
  MAJOR: Object.freeze(new Suit('Major Arcana', "Strong forces beyond the Querent's control")),
  WANDS: Object.freeze(new Suit('Wands', "Energy, opposition, quarrel")),
  CUPS: Object.freeze(new Suit('Cups', "Pleasure, merriment")),
  SWORDS: Object.freeze(new Suit('Swords', "Trouble, sadness, sickness, death")),
  PENTACLES: Object.freeze(new Suit('Pentacles', "Business, money, possessions")),
});

export class Rank {
  constructor(name, interpretation) {
    this.name = name;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Ranks = Object.freeze({
  KEY: Object.freeze(new Rank('Key', "Strong forces beyond the Querent's control")),
  ACE: Object.freeze(new Rank('Ace', "Strength generally. Aces are always strong cards")),
  TWO: Object.freeze(new Rank('Two', "")),
  THREE: Object.freeze(new Rank('Three', "")),
  FOUR: Object.freeze(new Rank('Four', "")),
  FIVE: Object.freeze(new Rank('Five', "")),
  SIX: Object.freeze(new Rank('Six', "")),
  SEVEN: Object.freeze(new Rank('Seven', "")),
  EIGHT: Object.freeze(new Rank('Eight', "")),
  NINE: Object.freeze(new Rank('Nine', "")),
  TEN: Object.freeze(new Rank('Ten', "")),
  PAGE: Object.freeze(new Rank('Page', "Opinions, thoughts, ideas, either in harmony with or opposed to, the subject")),
  KNIGHT: Object.freeze(new Rank('Knight', "Coming or going of a matter, according as they face")),
  QUEEN: Object.freeze(new Rank('Queen', "Women are connected with the matter.")),
  KING: Object.freeze(new Rank('King', "Men are connected with the matter.")),
});

export const Facings = Object.freeze({
  FORWARD: Symbol('FORWARD'),
  RIGHT: Symbol('RIGHT'),
  LEFT: Symbol('LEFT'),
  AWAY: Symbol('AWAY'),
  NONE: Symbol('NONE'),
})

export class Card {
  constructor(imageSrc, suit, rank, facing, number, order, name, title, description, interpretation) {
    this.imageSrc = imageSrc;
    this.suit = suit;
    this.rank = rank;
    this.facing = facing;
    this.number = number;
    this.order = order;
    this.name = name;
    this.title = title;
    this.description = description;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Cards = Object.freeze({
  FOOL: Object.freeze(new Card('TheFool.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 0, 57, 'The Fool',
    'The Spirit of Æther (GR:Alpha-iota-theta-eta-rho)',
    "",
    "If the question refers to spiritual matters, the Fool means idea, thought, spirituality, that which endeavours to transcend Earth. But if question is material, it means folly, stupidity, eccentricity, or even mania. ")),
  MAGICIAN: Object.freeze(new Card('TheMagician.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 1, 58, 'The Magician',
    'The Magus of Power',
    "",
    "Skill, wisdom, adaptation, craft, cunning, or occult wisdom or power.")),
  HIGH_PRIESTESS: Object.freeze(new Card('TheHighPriestess.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 2, 59, 'The High Priestess',
    'The Priestess of the Silver Star',
    "",
    "Change, alternation, increase and decrease, fluctuation; whether for good or evil depends on the dignity.")),
  EMPRESS: Object.freeze(new Card('TheEmpress.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 3, 60, 'The Empress',
    'The Daughter of the Mighty Ones',
    "",
    "Beauty, happiness, pleasure, success. But with very bad dignity it means luxury, dissipation.")),
  EMPEROR: Object.freeze(new Card('TheEmperor.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 4, 61, 'The Emperor',
    'Sun of the Morning, chief among the Mighty',
    "",
    "War, conquest, victory, strife, ambition.")),
  HIEROPHANT: Object.freeze(new Card('TheHierophant.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 5, 62, 'The Hierophant',
    'The Magus of the Eternal',
    "",
    "Divine wisdom, manifestation, explanation, teaching, occult force voluntarily invoked.")),
  LOVERS: Object.freeze(new Card('TheLovers.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 6, 63, 'The Lovers',
    'The Children of the Zain Gemini Voice; the Oracles of the Mighty Gods',
    "",
    "Inspiration (passive, mediumistic), motive power, action.")),
  CHARIOT: Object.freeze(new Card('TheChariot.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 7, 64, 'The Chariot',
    'The Child of the Powers of the Waters; the Lord of the Triumph of Light',
    "",
    "Triumph, victory, health (sometimes unstable).")),
  STRENGTH: Object.freeze(new Card('Strength.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 8, 65, 'The Strength',
    'The Daughter of the Flaming Sword',
    "",
    "Eternal justice. Strength and force, but arrested as in act of judgment. May mean law, trial, etc.")),
  HERMIT: Object.freeze(new Card('TheHermit.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 9, 66, 'The Hermit',
    'The Magus of the Voice of Power, the Prophet of the Eternal',
    "",
    'Wisdom from on high. Active divine inspiration. Sometimes "unexpected current."')),
  WHEEL_OF_FORTUNE: Object.freeze(new Card('TheWheelOfFortune.png', Suits.MAJOR, Ranks.KEY, Facings.NONE, 10, 67, 'The Wheel of Fortune',
    'The Lord of the of Fate Forces of Life',
    "",
    "Good fortune, happiness (within bounds). Intoxication of success.")),
  JUSTICE: Object.freeze(new Card('Justice.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 11, 68, 'Justice',
    'The Daughter of the Lords of Truth: the Ruler of the Balance',
    "",
    "Courage, strength, fortitude, power passing on to action. Obstinacy.")), 
  HANGED_MAN: Object.freeze(new Card('TheHangedMan.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 12, 69, 'The Hanged Man',
    'The Spirit of the Mighty Waters',
    "",
    "Enforced sacrifice, punishment, loss, fatal and not voluntary, suffering.")),
  DEATH: Object.freeze(new Card('Death.png', Suits.MAJOR, Ranks.KEY, Facings.RIGHT, 13, 70, 'Death',
    'The Child of the Great Transformers: the Lord of the Gates of Death',
    "",
    "Time, age, transformation, change involuntary (as opposed to 18, Pisces). Or death, destruction (only latter with special cards).")), 
  TEMPERANCE: Object.freeze(new Card('Temperance.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 14, 71, 'Temperance',
    'The Daughter of the Reconcilers: the Bringer-Forth of life',
    "",
    "Combination of forces, realization, action (material effect, good or evil).")),
  DEVIL: Object.freeze(new Card('TheDevil.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 15, 72, 'The Devil',
    'The Lord of the Gates of Matter: the Child of the Forces of Time',
    "",
    "Materiality, material force, material temptation, obsession.")),
  TOWER: Object.freeze(new Card('TheTower.png', Suits.MAJOR, Ranks.KEY, Facings.NONE, 16, 73, 'The Tower',
    'The Lord of the Hosts of the Mighty',
    "",
    "Ambition, fighting, war, courage, or destruction, danger, fall, ruin.")),
  STAR: Object.freeze(new Card('TheStar.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 17, 74, 'The Star',
    'The Daughter of the Firmament, the dweller between the Waters',
    "",
    "Hope, faith, unexpected help. Or dreaminess, deceived hope, etc.")),
  MOON: Object.freeze(new Card('TheMoon.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 18, 75, 'The Moon',
    'The Ruler of Flux and Reflux: the Child of the Sons of the Mighty',
    "",
    "Dissatisfaction, voluntary change. Error, lying, falsity, deception. This card is very sensitive to dignity.")),
  SUN: Object.freeze(new Card('TheSun.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 19, 76, 'The Sun',
    'The Lord of the Fire of the World',
    "",
    "Glory, gain, riches. With \"very\" evil cards it means arrogance, display, vanity.")),
  JUDGEMENT: Object.freeze(new Card('Judgement.png', Suits.MAJOR, Ranks.KEY, Facings.FORWARD, 20, 77, 'Judgement',
    'The Spirit of the Primal Fire',
    "",
    'Final decision, judgment, sentence, determination of a matter without appeal, "on its plane."')),
  WORLD: Object.freeze(new Card('TheWorld.png', Suits.MAJOR, Ranks.KEY, Facings.LEFT, 21, 78, 'The World',
    'The Great One of the Night of Time',
    "",
    "The matter itself. Synthesis, world, kingdom. Usually denotes actual subject of question, and therefore depends entirely on accompanying cards.")),

  ACE_OF_WANDS: Object.freeze(new Card('AceOfWands.png', Suits.WANDS, Ranks.ACE, Facings.NONE, 0, 1, 'The Ace Of Wands',
    "The Root of the Powers of Fire",
    "A White Radiating Angelic Hand, issuing from clouds, and grasping a heavy club, which has three branches in the colours, and with the sigils, of the scales. The Right-and Left-hand branches end respectively in three Flames, and the Centre one in four Flames: thus yielding Ten: the Number of the Sephiroth. Two-and-twenty leaping Flames, or Yodh, surround it, answering to the Paths; of these, three fall below the Right branch for Aleph, Men, and Shin, seven above the Central branch for the double letters; and between it and that of the Right twelve: six above and six below about the Left-hand branch. The whole is a great and flaming Torch.",
    "It symbolizes Force -- strength, rush, vigour, energy, and it governs, according to its nature, various works and questions. It implies Natural, as opposed to Invoked, Force.")),
  TWO_OF_WANDS: Object.freeze(new Card('TwoOfWands.png', Suits.WANDS, Ranks.TWO, Facings.LEFT, 1, 45, 'The Two Of Wands',
    "The Lord of Dominion", "A WHITE Radiating Angelic hand, issuing from clouds, and grasping two crossed wands. Flames issue from the point of junction. On two small wands above and below, with flames of five issuing therefrom, are the symbols of Mars and Aries for the Decan", "Strength, domination, harmony of rule and of justice. Boldness, courage, fierceness, shamelessness, revenge, resolution, generous, proud, sensitive, ambitious, refined, restless, turbulent, sagacious withal, yet unforgiving and obstinate.\nChokmah of HB:Y (<span direction='rtl'></span>) (Influence over others, authority, power, dominion).\nTherein the Angels HB:VHVAL (<span direction='rtl'></span>) and HB:DNYAL (<span direction='rtl'></span>) bear rule. ")),
  THREE_OF_WANDS: Object.freeze(new Card('ThreeOfWands.png', Suits.WANDS, Ranks.THREE, Facings.AWAY, 2, 46, 'The Three Of Wands',
    "The Lord of Established Strength", "A WHITE Radiating Angelic Hand, as before, issuing from clouds and grasping three wands in the centre (two crossed, the third upright). Flames issue from the point of junction. Above and below are the symbols Sun and Aries.", "Established force, strength, realization of hope. Completion of labour. Success after struggle. Pride, nobility, wealth, power, conceit. Rude self-assumption and insolence. Generosity, obstinacy, etc.\nBinah of HB:Y (<span direction='rtl'></span>) (Pride, arrogance, self-assertion).\nHerein rule the Angels HB:HHShYH (<span direction='rtl'></span>) and HB:a (<span direction='rtl'></span>)'aMMYH")),
  FOUR_OF_WANDS: Object.freeze(new Card('FourOfWands.png', Suits.WANDS, Ranks.FOUR, Facings.NONE, 3, 47, 'The Four Of Wands',
    "The Lord of Perfected Work", "TWO White Radiating Angelic Hands, as before, issuing from clouds right and left of the card and clasped in the centre with the grip of the First Order, holding four wands or torches crossed. Flames issue from the point of junction. Above and below are two small flaming wands, with the symbols of Venus and Aries representing the Decan.", "Perfection or completion of a thing built up with trouble and labour. Rest after labour, subtlety, cleverness, beauty, mirth, success in completion. Reasoning faculty, conclusions drawn from previous knowledge. Unreadiness, unreliable and unsteady through over-anxiety and hurriedness of action. Graceful in manner, at times insincere, etc.\nChesed of HB:Y (<span direction='rtl'></span>) (Settlement, arrangement, completion).\nHerein are HB:NNAAL (<span direction='rtl'></span>) and HB:NYThHL (<span direction='rtl'></span>) Angelic rulers. ")),
  FIVE_OF_WANDS: Object.freeze(new Card('FiveOfWands.png', Suits.WANDS, Ranks.FIVE, Facings.NONE, 4, 21, 'The Five Of Wands',
    "The Lord of Strife",
    "TWO White Radiant Angelic Hands issuant per nubes dexter and sinister. They are clasped together in the grip of the First Order, \"i.e.\" the four fingers of each right hand crooked into each other, the thumbs meeting above; and they hold, at the same time, by their centres, five wands or torches which are similar unto the wands of a Zelator Adeptus Minor. One wand is upright in the middle; the others cross each other. Flames leap from the point of junction. Above the middle wand is the sign Saturn, and below is that of Leo: thus representing the Decante.",
    "Violent strife and boldness, rashness, cruelty, violence, lust, desire, prodigality and generosity; depending on whether the card is well or ill dignified.\nGeburah of HB:Y (<span direction='rtl'></span>) (Quarrelling and fighting).\nThis Decan hath its beginning from the Royal Star of Leo: and unto it are allotted the two great Angels of the Schemhamphorash HB:VHVYH (<span direction='rtl'></span>) and HB:YLYAL. (<span direction='rtl'></span>)")),
  SIX_OF_WANDS: Object.freeze(new Card('SixOfWands.png', Suits.WANDS, Ranks.SIX, Facings.RIGHT, 5, 22, 'The Six Of Wands',
    "The Lord of Victory",
    "TWO hands in grip as the last, holding six wands crossed three and three. Flames issue from the point of junction. Above and below are short wands with flames issuing, surmounted respectively by the symbols of Jupiter and Leo, representing the Decan. ",
    "Victory after strife: Love: pleasure gained by labour: carefulness, sociability and avoiding of strife, yet victory therein: also insolence, and pride of riches and success, etc. The whole dependent on the dignity.\nTiphareth of HB:Y (<span direction='rtl'></span>) (Gain).\nHereunto are allotted the great Angels HB:SYTAL (<span direction='rtl'></span>) and HB:a (<span direction='rtl'></span>)'aLMYH of the Schemhamphorash.")),
  SEVEN_OF_WANDS: Object.freeze(new Card('SevenOfWands.png', Suits.WANDS, Ranks.SEVEN, Facings.FORWARD, 6, 23, 'The Seven Of Wands',
    "The Lord of Valour",
    "TWO hands holding by grip six wands, three crossed. A third hand issuing from a cloud at the lower part of the card, holding an upright wand which passes between the others. Flames leap from the point of junction. Above and below the central wand are the symbols of Mars and Leo, representing the Decan",
    "Possible victory, depending on the energy and courage exercised; valour; opposition, obstacles and difficulties, yet courage to meet them; quarrelling, ignorance, pretence, and wrangling, and threatening; also victory in small and unimportant things: and influence upon subordinates.\nNetzach of HB:Y (<span direction='rtl'></span>) (Opposition, yet courage).\nTherein rule the two great Angels HB:MHShYH (<span direction='rtl'></span>) and HB:LLHAL (<span direction='rtl'></span>) of the Schemhamphorash. ")),
  EIGHT_OF_WANDS: Object.freeze(new Card('EightOfWands.png', Suits.WANDS, Ranks.EIGHT, Facings.NONE, 7, 33, 'The Eight Of Wands',
    "The Lord of Swiftness",
    "FOUR White Radiating Angelic Hands (two proceeding from each side) issuant from clouds; clasped in two pairs in the centre with the grip of the First Order. They hold eight wands, crossed four with four. Flames issue from the point of junction. Surmounting the small wands with flames issuing down them, and placed in the centre at the top and bottom of the card respectively, are the symbols of Mercury and Sagittarius for the Decan.",
    "Too much force applied too suddenly. Very rapid rush, but quickly passed and expended. Violent, but not lasting. Swiftness, rapidity, courage, boldness, confidence, freedom, warfare, violence; love of open air, field-sports, gardens and meadows. Generous, subtle, eloquent, yet somewhat untrustworthy; rapacious, insolent, oppressive. Theft and robbery. According to dignity.\nHod of HB:Y (<span direction='rtl'></span>) (Hasty communications and messages; swiftness).\nTherein rule the Angels HB:NThHYH (<span direction='rtl'></span>) and HB:HAAYH. (<span direction='rtl'></span>)")),
  NINE_OF_WANDS: Object.freeze(new Card('NineOfWands.png', Suits.WANDS, Ranks.NINE, Facings.LEFT, 8, 34, 'The Nine Of Wands',
    "The Lord of Great Strength",
    "FOUR hands, as in the previous symbol, holding eight wands crossed four and four; but a fifth hand at the foot of the card holds another wand upright, which traverses the point of junction with the others: flames leap herefrom. Above and below are the symbols Moon and Sagittarius.",
    "Tremendous and steady force that cannot be shaken. Herculean strength, yet sometimes scientifically applied. Great success, but with strife and energy. Victory, preceded by apprehension and fear. Health good, and recovery not in doubt. Generous, questioning and curious; fond of external appearances: intractable, obstinate.\nYesod of HB:Y (<span direction='rtl'></span>) (Strength, power, health, recovery from sickness).\nHerein rule the Angels HB:YRThAL (<span direction='rtl'></span>) and HB:ShAHYH. (<span direction='rtl'></span>) ")),
  TEN_OF_WANDS: Object.freeze(new Card('TenOfWands.png', Suits.WANDS, Ranks.TEN, Facings.AWAY, 9, 35, 'The Ten Of Wands',
    "The Lord of Oppression",
    "FOUR hands holding eight wands crossed as before. A fifth hand holding two wands upright, which traverses the junction of the others. Flames issuant. Saturn and Sagittarius.",
    "Cruel and overbearing force and energy, but applied only to material and selfish ends. Sometimes shows failure in a matter, and the opposition too strong to be controlled; arising from the person's too great selfishness at the beginning. Illwill, levity, lying, malice, slander, envy, obstinacy; swiftness in evil and deceit, if ill dignified. Also generosity, disinterestedness and self-sacrifice, when well dignified.\nMalkuth of HB:V (<span direction='rtl'></span>) (Cruelty, malice, revenge, injustice).\nTherein rule HB:RYYAL (<span direction='rtl'></span>) and HB:AVMAL. (<span direction='rtl'></span>)")),
  PAGE_OF_WANDS: Object.freeze(new Card('PageOfWands.png', Suits.WANDS, Ranks.PAGE, Facings.RIGHT, 10, 8, 'The Page Of Wands',
    "The Princess of the Shining Flame: the Rose of the Palace of Fire", 
    "A Very strong and beautiful woman with flowing red-gold hair, attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back; and having a winged tiger's head in front. She wears a Corinthian-shaped helmet and crown with a long plume. It also is surmounted by a tiger's head, and the same symbol forms the buckle of her scalemail buskins. A mantle lined with tiger's skin falls back from her shoulders. Her right hand rests on a small golden or brazen altar ornamented with ram's heads and with Flames of Fire leaping from it. Her left hand leans on a long and heavy club, swelling at the lower end, where the sigil is placed; and it has flames of fire leaping from it the whole way down; but the flames are ascending. This club or torch is much longer than that carried by the King or Queen. Beneath her firmly placed feet are leaping Flames of Fire.",
    "Brilliance, courage, beauty, force, sudden in anger or love, desire of power, enthusiasm, revenge.\nIf ill dignified, she is superficial, theatrical, cruel, unstable, domineering.\nShe rules the heavens over one quadrant of the portion around the North Pole.\nEarth of Fire\nPrincess and Empress of the Salamanders.\nThrone of the Ace of Wands.")),
  KNIGHT_OF_WANDS: Object.freeze(new Card('KnightOfWands.png', Suits.WANDS, Ranks.KNIGHT, Facings.LEFT, 11, 5, 'The Knight Of Wands',
    "The Lord of the Flame and Lighting: the King of the Spirits of Fire",
    "A Winged Warrior riding upon a black horse with flaming mane and tail: the horse itself is not winged. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears as a crest a winged black horse's head. He grasps a club with flaming ends, somewhat similar to that in the symbol of the Ace of Wands, but not so heavy, and also the sigil of his scale is shown; beneath the rushing feet of his steed are waving flames and fire. He is active, generous, fierce, sudden, impetuous.",
    "If ill dignified, he is evil-minded, cruel, bigoted, brutal. He rules the celestial heavens from above the Twentieth Degree of Scorpio to the First Two Decans of Sagittarius: and this includes a part of the Constellation Hercules. (Hercules is always represented with a Club.)\nFire of Fire\nKing of the Salamanders.")),
  QUEEN_OF_WANDS: Object.freeze(new Card('QueenOfWands.png', Suits.WANDS, Ranks.QUEEN, Facings.RIGHT, 12, 6, 'The Queen Of Wands',
    "The Queen of the Thrones of Flame",
    "A Crowned queen with long red-golden hair, seated upon a Throne, with steady flames beneath. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. On cuirass and buskins are leopard's heads winged, and the same symbol surmounteth her crown. At her side is a couchant leopard on which her hands rest. She bears a long wand with a very heavy conical head. The face is beautiful and resolute.",
    "Adaptability, steady force applied to an object, steady rule, great attractive power, power of command, yet liked notwithstanding. Kind and generous when not opposed.\nIf ill dignified, obstinate, revengeful, domineering, tyrannical, and apt to turn against another without a cause.\nShe rules the heavens from above the last Decan of Pisces to above the 20 Degree of Aries: including thus a part of Andromeda.\nWater of Fire\nQueen of the Salamanders.")),
  KING_OF_WANDS: Object.freeze(new Card('KingOfWands.png', Suits.WANDS, Ranks.KING, Facings.LEFT, 13, 7, 'The King Of Wands',
    "The Prince of the Chariot of Fire",
    "A Kingly Figure with a golden, winged crown, seated on a chariot. He has large white wings. One wheel of his chariot is shown. He wears corslet and buskins of scale armour decorated with a winged lion's head, which symbol also surmounts his crown. His chariot is drawn by a lion. His arms are bare, save for the shoulder-pieces of the corslet, and he bears a torch or fire-wand, somewhat similar to that of the Zelator Adeptus Minor. Beneath the chariot are flames, some waved, some salient.",
    "Swift, strong, hasty; rather violent, yet just and generous; noble and scorning meanness.\nIf ill dignified cruel, intolerant, prejudiced and ill natured. He rules the heavens from above the last Decan of Cancer to the second Decan of Leo; hence he includes most of Leo Minor.\nAir of Fire\nPrince and Emperor of Salamanders.")),

  ACE_OF_CUPS: Object.freeze(new Card('AceOfCups.png', Suits.CUPS, Ranks.ACE, Facings.NONE, 0, 2, 'The Ace Of Cups',
    "The Root of the Powers of Water",
    "A White Radiant Angelic Hand, issuing from clouds, and supporting on the palm thereof a cup, resembling that of the Stolistes. From it rises a fountain of clear and glistening water: and sprays falling on all sides into clear calm water below, in which grow Lotuses and Water-lilies. The great Letter of the Supernal Mother is traced in the spray of the Fountain.",
    "Fertility -- productiveness, beauty, pleasure, happiness, etc.")),
  TWO_OF_CUPS: Object.freeze(new Card('TwoOfCups.png', Suits.CUPS, Ranks.TWO, Facings.NONE, 1, 54, 'The Two Of Cups',
    "The Lord of Love",
    "A WHITE Radiant Hand, issuant from the lower part of the card from a cloud, holds lotuses. A lotus flower rises above water, which occupies the lower part of the card rising above the hand. From this flower rises a stem, terminating near the top of the card in another lotus, from which flows a sparkling white water, as from a fountain. Crossed on the stem just beneath are two dolphins, Argent and Or, on to which the water falls, and from which it pours in full streams, like jets of gold and silver, into two cups; which in their turn overflow, flooding the lower part of the card. Venus and Cancer above and below",
    "Harmony of masculine and feminine united. Harmony, pleasure, mirth, subtlety: but if ill dignified --- folly, dissipation, waste, silly actions.\nChokmah of HB:H (<span direction='rtl'></span>) (Marriage, love, pleasure).\nTherein rule the Angels HB:AVa (<span direction='rtl'></span>)'aAL and HB:ChBVYH. (<span direction='rtl'></span>) ")),
  THREE_OF_CUPS: Object.freeze(new Card('ThreeOfCups.png', Suits.CUPS, Ranks.THREE, Facings.NONE, 2, 55, 'The Three Of Cups',
    "The Lord of Abundance",
    "A WHITE Radiating Hand, as before, holds a group of lotuses or water-lilies, from which two flowers rise on either side of, and overhanging the top cup; pouring into it the white water. Flowers in the same way pour white water into the lower cups. All the cups overflow; the topmost into the two others, and these upon the lower part of the card. Cups are arranged in an erect equilateral triangle. Mercury and Cancer above and below.",
    "Abundance, plenty, success, pleasure, sensuality, passive success, good luck and fortune; love, gladness, kindness, liberality.\nBinah of HB:H (<span direction='rtl'></span>) (Plenty, hospitality, eating and drinking, pleasure, dancing, new clothes, merriment).\nTherein the Angels HB:RAHAL (<span direction='rtl'></span>) and HB:YBMYH (<span direction='rtl'></span>) are lords. ")),
  FOUR_OF_CUPS: Object.freeze(new Card('FourOfCups.png', Suits.CUPS, Ranks.FOUR, Facings.LEFT, 3, 56, 'The Four Of Cups',
    "The Lord of Blended Pleasure",
    "FOUR cups: the two upper overflowing into the two lower, which do not overflow. An Angelic Hand grasps a branch of lotus, from which ascends a stem bearing one flower at the top of the card, from which the white water flows into the two upper cups. From the centre two leaves pass right and left, making, as it were, a cross between the four cups. Above and below are the symbols Moon and Cancer for the Decan.",
    "Success or pleasure approaching their end. A stationary period in happiness, which may, or may not, continue. It does not mean love and marriage so much as the previous symbol. It is too passive a symbol to represent perfectly complete happiness. Swiftness, hunting and pursuing. Acquisition by contention: injustice sometimes; some drawbacks to pleasure implied.\nChesed of HB:H (<span direction='rtl'></span>) (Receiving pleasure or kindness from others, but some discomfort therewith).\nTherein rule the great Angels HB:HYYAL (<span direction='rtl'></span>) and HB:MVMYH. (<span direction='rtl'></span>)")),
  FIVE_OF_CUPS: Object.freeze(new Card('FiveOfCups.png', Suits.CUPS, Ranks.FIVE, Facings.LEFT, 4, 30, 'The Five Of Cups',
    "The Lord of Loss in Pleasure",
    "A WHITE Radiating Angelic Hand, holding lotuses or water-lilies, of which the flowers are falling right and left. Leaves only, and no buds, surmount them. These lotus stems ascend between the cups in the manner of a fountain, but no water flows therefrom; neither is there water in any of the cups, which are somewhat of the shape of the magical instrument of the Zelator Adeptus Minor.\nAbove and below are the symbols of Mars and Scorpio for the Decan",
    "Death, or end of pleasure: disappointment, sorrow and loss in those things from which pleasure is expected. Sadness, treachery, deceit; ill-will, detraction; charity and kindness ill requited; all kinds of anxieties and troubles from unsuspected and unexpected sources.\nGeburah of HB:H (<span direction='rtl'></span>) (Disappointment in love, marriage broken off, unkindness of afriend; loss of friendship).\nHerein rule HB:LVVYH (<span direction='rtl'></span>) and HB:PHLYH. (<span direction='rtl'></span>)")),
  SIX_OF_CUPS: Object.freeze(new Card('SixOfCups.png', Suits.CUPS, Ranks.SIX, Facings.NONE, 5, 31, 'The Six Of Cups',
    "The Lord of Pleasure",
    "AN Angelic Hand, as before, holds a group of stems of water-lilies or lotuses, from which six flowers bend, one over each cup. From these flowers a white glistening water flows into the cups as from a fountain, but they are not yet full. Above and below are Sun and Scorpio referring to the Decan",
    "Commencement of steady increase, gain and pleasure; but commencement only. Also affront, detection, knowledge, and in some instances contention and strife arising from unwarranted self-assertion and vanity. Sometimes thankless and presumptuous; sometimes amiable and patient. According to dignity as usual.\nTiphareth of HB:H (<span direction='rtl'></span>) (Beginning of wish, happiness, success, or enjoyment).\nTherein rule HB:NLKAL (<span direction='rtl'></span>) and HB:YYYAL. (<span direction='rtl'></span>)")),
  SEVEN_OF_CUPS: Object.freeze(new Card('SevenOfCups.png', Suits.CUPS, Ranks.SEVEN, Facings.AWAY, 6, 32, 'The Seven Of Cups',
    "The Lord of Illusionary Success",
    "THE seven cups are arranged as two descending triangles above a point: a hand, as usual, holds lotus stems which arise from the central lower cup. The hand is above this cup and below the middle one. With the exception of the central lower cup, each is overhung by a lotus flower, but no water falls from these into any of the cups, which are all quite empty. Above and below are the symbols of the Decanate Venus and Scorpio.",
    "Possible victory, but neutralized by the supineness of the person: illusionary success, deception in the moment of apparent victory. Lying, error, promises unfulfilled. Drunkenness, wrath, vanity. Lust, fornication, violence against women, selfish dissipation, deception in love and friendship. Often success gained, but not followed up. Modified as usual by dignity.\nNetzach of HB:H (<span direction='rtl'></span>) (Lying, promises unfulfilled; illusion, deception, error; slight success at outset, not retained).\nHerein the Angels HB:MLHAL (<span direction='rtl'></span>) and HB:ChHVYH (<span direction='rtl'></span>) rule. ")),
  EIGHT_OF_CUPS: Object.freeze(new Card('EightOfCups.png', Suits.CUPS, Ranks.EIGHT, Facings.AWAY, 7, 42, 'The Eight Of Cups',
    "The Lord of Abandoned Success",
    "A WHITE Radiating Angelic Hand, holding a group of stems of lotuses or waterlilies. There are only two flowers shown, which bend over the two central cups, pouring into them a white water which fills them and runs over into the three lowest, which later are not yet filled. The three uppermost are quite empty.\nAt the top and bottom of the card are symbols Saturn and Pisces.",
    "Temporary success, but without further results. Thing thrown aside as soon as gained. Not lasting, even in the matter in hand. Indolence in success. Journeying from place to place. Misery and repining without cause. Seeking after riches. Instability.\nHod of HB:H (<span direction='rtl'></span>) (Success abandoned; decline of interest).\nThe Angels ruling are HB:VVLYH (<span direction='rtl'></span>) and HB:YLHYH. (<span direction='rtl'></span>)")),
  NINE_OF_CUPS: Object.freeze(new Card('NineOfCups.png', Suits.CUPS, Ranks.NINE, Facings.FORWARD, 8, 43, 'The Nine Of Cups',
    "The Lord of Material Happiness",
    "A WHITE Radiant Angelic Hand, issuing from a cloud holding lotus or waterlilies, one flower of which overhangs each cup; from it a white water pours. Cups are arranged in three rows of 3. Jupiter and Pisces above and below.",
    "Complete and perfect realization of pleasure and happiness, almost perfect; selfpraise, vanity, conceit, much talking of self, yet kind and lovable, and may be self-denying therewith. High-minded, not easily satisfied with small and limited ideas. Apt to be maligned through too much self-assumption. A good and generous, but sometimes foolish nature.\nYesod of HB:H (<span direction='rtl'></span>) (Complete success, pleasure and happiness, wishes fulfilled).\nTherein rule the Angels HB:SALYH (<span direction='rtl'></span>) and HB:a (<span direction='rtl'></span>)'aRYAL. ")),
  TEN_OF_CUPS: Object.freeze(new Card('TenOfCups.png', Suits.CUPS, Ranks.TEN, Facings.AWAY, 9, 44, 'The Ten Of Cups',
    "The Lord of Perfected Success",
    "HAND, as usual, holding bunch of water-lilies or lotuses, whose flowers pour a white water into all the cups, which \"all run over.\" The uppermost cup is held sideways by a hand, and pours water into the left-hand upper cup. A single lotus flower surmounts the top cup, and is the source of the water that fills it. Above and below the symbols Mars and Pisces.",
    "Permanent and lasting success and happiness, because inspired from above. Notso sensual as \"Lord of Material Happiness,\" yet almost more truly happy. Pleasure, dissipation, debauchery, quietness, peacemaking. Kindness, pity, generosity, wantonness, waste, etc., according to dignity.\nMalkuth of HB:H (<span direction='rtl'></span>) (Matter settled: complete good fortune).\nHerein the Great Angels HB:a (<span direction='rtl'></span>)'aShLYH and HB:MYHAL (<span direction='rtl'></span>) rule. ")),
  PAGE_OF_CUPS: Object.freeze(new Card('PageOfCups.png', Suits.CUPS, Ranks.PAGE, Facings.LEFT, 10, 12, 'The Page Of Cups',
    "The Princess of the Waters: the Lotus of the Palace of the Floods",
    "A Beautiful Amazon-like figure, softer in nature than the Princess of Wands.  Attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back. She stands on a sea with foaming spray. Away to her right a Dolphin. She wears as a crest a swan with opening wings. She bears in one hand a lotus, and in the other an open cup from which a turtle issues. Her mantle is lined with swans-down, and is of thin floating material.",
    "Sweetness, poetry, gentleness and kindness. Imaginative, dreamy, at times indolent, yet courageous if roused.\nWhen ill dignified she is selfish and luxurious.\nShe rules a quadrant of the heavens around Kether.\nEarth of Water\nPrincess and Empress of the Nymphs or Undines\nThrone of the Ace of Cups.")),
  KNIGHT_OF_CUPS: Object.freeze(new Card('KnightOfCups.png', Suits.CUPS, Ranks.KNIGHT, Facings.RIGHT, 11, 9, 'The Knight Of Cups',
    "The Lord of the Waves and the Waters: the King of the Hosts of the Sea",
    "A Beautiful, winged, youthful Warrior with flying hair, riding upon a white horse, which latter is not winged. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, is a peacock with opened wings. He holds a cup in his hand, bearing the sigil of the scale. Beneath his horse's feet is the sea. From the cup issues a crab.",
    "Graceful, poetic, Venusian, indolent, but enthusiastic if roused.\nIll dignified, he is sensual, idle and untruthful.\nHe rules the heavens from above 20 Degree of Aquarius to 20 Degree of Pisces, thus including the greater part of Pegasus.\nFire of Water\nKing of Undines and Nymphs")),
  QUEEN_OF_CUPS: Object.freeze(new Card('QueenOfCups.png', Suits.CUPS, Ranks.QUEEN, Facings.LEFT, 12, 10, 'The Queen Of Cups',
    "The Queen of the Thrones of the Waters",
    "A Very beautiful fair woman like a crowned Queen, seated upon a throne, beneath which is flowing water wherein Lotuses are seen. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. Upon her crown, cuirass and buskins is seen an Ibis with opened wings, and beside her is the same bird, whereon her hand rests. She holds a cup, wherefrom a crayfish issues. Her face is dreamy. She holds a lotus in the hand upon the Ibis.",
    "She is imaginative, poetic, kind, yet not willing to take much trouble for another. Coquettish, good-natured and underneath a dreamy appearance. Imagination stronger than feeling. Very much affected by other influences, and therefore more dependent upon dignity than most symbols.\nShe rules from 20 Degree Gemini to 20 Degree Cancer.\nWater of Water\nQueen of Nymphs or Undines.")),
  KING_OF_CUPS: Object.freeze(new Card('KingOfCups.png', Suits.CUPS, Ranks.KING, Facings.RIGHT, 13, 11, 'The King Of Cups',
    "The Prince of the Chariot of the Waters",
    "A Winged Kingly Figure with winged crown seated in a chariot drawn by an eagle. On the wheel is the symbol of a scorpion. The eagle is borne as a crest on his crown, cuirass and buskins. General attire like King of Wands. Beneath his chariot is the calm and stagnant water of a lake. His armour resembles feathers more than scales. He holds in one hand a lotus, and in the other a cup, charged with the sigil of his scale. A serpent issues from the cup, and has its head tending down to the waters of the lake. He is subtle, violent, crafty and artistic; a fierce nature with calm exterior. Powerful for good or evil but more attracted by the evil if allied with apparent Power or Wisdom.",
    "If ill dignified, he is intensely evil and merciless.\nHe rules from 20 Degree Libra to 20 Degree Scorpio.\nAir of Water\nPrince and Emperor of Nymphs or Undines")),

  ACE_OF_SWORDS: Object.freeze(new Card('AceOfSwords.png', Suits.SWORDS, Ranks.ACE, Facings.NONE, 0, 3, 'The Ace Of Swords',
    "The Root of the Powers of Air",
    "A White Radiating Angelic Hand, issuing from clouds, and grasping the hilt of a sword, which supports a White Radiant Celestial Crown; from which depend, on the right, the olive branch of Peace; and on the left, the palm branch of suffering. Six Vaus fall from its point.",
    'It symbolizes "Invoked," as contrasted with Natural Force: for it is the Invocation of the Sword. Raised upward, it invokes the Divine crown of Spiritual Brightness, but reversed it is the Invocation of Demonic Force; and becomes a fearfully evil symbol. It represents, therefore, very great power for good or evil, but invoked; and it also represents whirling Force, and strength through trouble. It is the affirmation of Justice upholding Divine Authority; and it may become the Sword of Wrath, Punishment, and Affliction.')),
  TWO_OF_SWORDS: Object.freeze(new Card('TwoOfSwords.png', Suits.SWORDS, Ranks.TWO, Facings.FORWARD, 1, 27, 'The Two Of Swords',
    "The Lord of Peace Restored",
    "Two crossed swords, like the air dagger of a Zelator Adeptus Minor, each held by a White Radiant Angelic Hand. Upon the point where the two cross is a rose of five petals, emitting white rays. At the top and bottom of the card are two small daggers, supporting respectively the symbol {Crescent moon with horns upward} thus, and Libra representing the Decanate. ",
    "Contradictory characters in the same nature, strength through suffering; pleasure after pain. Sacrifice and trouble, yet strength arising therefrom, symbolized by the position of the rose, as though the pain itself had brought forth beauty. Arrangement, peace restored; truce; truth and untruth; sorrow and sympathy. Aid to the weak; arrangement; justice, unselfishness; also a tendency to repetition of affronts on being pardoned; injury when meaning well; given to petitions; also a want of tact, and asking question of little moment; talkative.\nChokmah of Vau. Quarrel made up, yet still some tension in relations: actions sometimes selfish, sometimes unselfish.\nHerein rule the Great Angels HB:YZLAL (<span direction='rtl'></span>) and HB:MNHAL (<span direction='rtl'></span>)")),
  THREE_OF_SWORDS: Object.freeze(new Card('ThreeOfSwords.png', Suits.SWORDS, Ranks.THREE, Facings.NONE, 2, 28, 'The Three Of Swords',
    "The Lord of Sorrow",
    "THREE White Radiating Angelic Hands, issuing from clouds, and holding three swords upright (as though the central sword had struck apart the two others, which were crossed in the preceding symbol): the central sword cuts asunder the rose of five petals, which in the previous symbol grew at the junction of the swords; its petals are falling, and no white rays issue from it. Above and below the central sword are the symbols of Saturn and Libra.",
    "Disruption, interruption, separation, quarrelling; sowing of discord and strife, mischief-making, sorrow and tears; yet mirth in Platonic pleasures; singing, faithfulness in promises, honesty in money transactions, selfish and dissipated, yet sometimes generous: deceitful in words and repetitions; the whole according to dignity.\nBinah of HB:V (<span direction='rtl'></span>) (Unhappiness, sorrow, and tears).\nHerein rule the Great Angels HB:HRYAL (<span direction='rtl'></span>) and HB:HQMYH (<span direction='rtl'></span>) as Lords of the Decan. ")),
  FOUR_OF_SWORDS: Object.freeze(new Card('FourOfSwords.png', Suits.SWORDS, Ranks.FOUR, Facings.NONE, 3, 29, 'The Four Of Swords',
    "The Lord of Rest from Strife",
    "TWO White Radiating Angelic Hands, each holding two swords; which four cross in the centre. The rose of five petals with white radiations is reinstated on the point of their intersection. Above and below, on the points of two small daggers, are Jupiter and Libra, representing the Decanate",
    "Rest from sorrow; yet after and through it. Peace from and after war. Relaxation of anxiety. Quietness, rest, ease and plenty, yet after struggle. Goods of this life; abundance; modified by dignity as is usual.\nChesed of HB:V (<span direction='rtl'></span>) (Convalescence, recovery from sickness; change for the better).\nHerein do HB:LAVYH (<span direction='rtl'></span>) and HB:KLYAL (<span direction='rtl'></span>) bear rule.")),
  FIVE_OF_SWORDS: Object.freeze(new Card('FiveOfSwords.png', Suits.SWORDS, Ranks.FIVE, Facings.AWAY, 4, 39, 'The Five Of Swords',
    "The Lord of Defeat",
    "TWO Rayed Angelic Hands each holding two swords nearly upright, but falling apart of each other, right and left of the card. A third hand holds a sword upright in the centre as though it had disunited them. The petals of the rose, which in the four had been reinstated in the centre, are torn asunder and falling. Above and below are Venus and Aquarius for Decan.",
    "Contest finished and decided against the person; failure, defeat, anxiety, trouble, poverty, avarice, grieving after gain, laborious, unresting; loss and vileness of nature; malicious, slanderous, lying, spiteful and tale-bearing. A busybody and separator of friends, hating to see peace and love between others. Cruel, yet cowardly, thankless and unreliable. Clever and quick in thought and speech. Feelings of pity easily roused, but unenduring.\nGeburah of HB:V (<span direction='rtl'></span>) (Defeat, loss, malice, spite, slander, evil-speaking).\nHerein the Angels HB:ANYAL (<span direction='rtl'></span>) and HB:Cha (<span direction='rtl'></span>)'aMYH bear rule. ")),
  SIX_OF_SWORDS: Object.freeze(new Card('SixOfSwords.png', Suits.SWORDS, Ranks.SIX, Facings.AWAY, 5, 40, 'The Six Of Swords',
    "The Lord of Earned Success",
    "TWO hands, as before, each holding two swords which cross in the centre. Rose re-established thereon. Mercury and Aquarius above and below, supported on the points of two short daggers or swords.",
    "Success after anxiety and trouble; self-esteem, beauty, conceit, but sometimes modesty therewith; dominance, patience, labour, etc.\nTiphareth of HB:V (<span direction='rtl'></span>) (Labour, work, journey by water).\nRuled by the Great Angels HB:RHa (<span direction='rtl'></span>)'aAL and HB:YYVHL. (<span direction='rtl'></span>) ")),
  SEVEN_OF_SWORDS: Object.freeze(new Card('SevenOfSwords.png', Suits.SWORDS, Ranks.SEVEN, Facings.RIGHT, 6, 41, 'The Seven Of Swords',
    "The Lord of Unstable Effort",
    'TWO Angelic Radiating Hands as before, each holding three swords. A third hand holds up a single sword in the centre. The points of all the swords "just touch" each other, the central sword not altogether dividing them.',
    "The Rose of the previous symbols of this suit is held up by the same hand which holds the central sword: as if the victory were at its disposal. Symbols of Moon and Aquarius.\nPartial success. Yielding when victory is within grasp, as if the last reserves of strength were used up. Inclination to lose when on the point of gaining, through not continuing the effort. Love of abundance, fascinated by display, given to compliments, affronts and insolences, and to spy upon others. Inclined to betray confidences, not always intentionally. Rather vacillatory and unreliable.\nNetzach of HB:V (<span direction='rtl'></span>) (Journey by land: in character untrustworthy).\nHerein rule the Great Angels HB:HHHAL (<span direction='rtl'></span>) and HB:Ma (<span direction='rtl'></span>)'aKAL.")),
  EIGHT_OF_SWORDS: Object.freeze(new Card('EightOfSwords.png', Suits.SWORDS, Ranks.EIGHT, Facings.FORWARD, 7, 51, 'The Eight Of Swords',
    "The Lord of Shortened Force",
    "FOUR White Radiant Angelic Hands issuing from clouds, each holding two swords, points upwards; all the points touch near the top of the card. Hands issue, two at each bottom angle of the card. The pose of the other sword symbols is reestablished in the centre. Above and below are the Decan symbols Jupiter and Gemini",
    "Too much force applied to small things: too much attention to detail at the expense of the principal and more important points. When ill dignified, these qualities produce malice, pettiness, and domineering characteristics. Patience in detail of study; great care in some things, counterbalanced by equal disorder in others. Impulsive; equally fond of giving or receiving money or presents; generous, clever, acute, selfish and without strong feeling of affection. Admires wisdom, yet applies it to small and unworthy objects.\nHod of HB:V (<span direction='rtl'></span>) (Narrow, restricted, petty, a prison).\nTherein rule the Angels HB:VMBAL (<span direction='rtl'></span>) and HB:YHHAL (<span direction='rtl'></span>)")),
  NINE_OF_SWORDS: Object.freeze(new Card('NineOfSwords.png', Suits.SWORDS, Ranks.NINE, Facings.RIGHT, 8, 52, 'The Nine Of Swords',
    "The Lord of Despair and Cruelty",
    "FOUR Hands, as in the preceding figure, hold eight swords nearly upright, but with the points falling away from each other. A fifth hand holds a ninth sword upright in the centre, as if it had struck them asunder. No rose at all is shown, as if it were not merely cut asunder, but utterly destroyed. Above and below are the Decan symbols Mars and Gemini.",
    "Despair, cruelty, pitilessness, malice, suffering, want, loss, misery. Burden, oppression, labour, subtlety and craft, dishonesty, lying and slander.\nYet also obedience, faithfulness, patience, unselfishness, etc. According to dignity.\nYesod of HB:V (<span direction='rtl'></span>) (Illness, suffering, malice, cruelty, pain).\nTherein do HB:a (<span direction='rtl'></span>)'aNVAL and HB:MChYAL (<span direction='rtl'></span>) bear rule. ")),
  TEN_OF_SWORDS: Object.freeze(new Card('TenOfSwords.png', Suits.SWORDS, Ranks.TEN, Facings.NONE, 9, 53, 'The Ten Of Swords',
    "The Lord of Ruin",
    "FOUR hands holding eight swords, as in the preceding symbol; the points falling away from each other. Two hands hold two swords crossed in the centre, as though their junction had disunited the others. No rose, flower or bud, is shown. Above and below are Sun and Gemini, representing the Decan",
    "Almost a worse symbol than the Nine of Swords. Undisciplined, warring force, complete disruption and failure. Ruin of all plans and projects. Disdain, insolence and impertinence, yet mirth and jollity therewith. A marplot, loving to overthrow the happiness of others; a repeater of things; given to much unprofitable speech, and of many words. Yet clever, eloquent, etc., according to dignity.\nMalkuth of HB:V (<span direction='rtl'></span>) (Ruin, death, defeat, disruption).\nHerein the Angels HB:DMBYH (<span direction='rtl'></span>) and HB:MNQAL (<span direction='rtl'></span>) reign.")),
  PAGE_OF_SWORDS: Object.freeze(new Card('PageOfSwords.png', Suits.SWORDS, Ranks.PAGE, Facings.LEFT, 10, 16, 'The Page Of Swords',
    "The Princess of the Rushing Winds: the Lotus of the Palace of Air",
    "An Amazon figure with waving hair, slighter than the Rose of the Palace of Fire. Attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back. The Feet seem springy, giving the idea of swiftness. Weight changing from one foot to another and body swinging around. She is a mixture of Minerva and Diana: her mantle resembles the AEgis of Minerva. She wears as a crest the head of the Medusa with serpent hair. She holds a sword in one hand; and the other rests upon a small silver altar with grey smoke (no fire) ascending from it. Beneath her feet are white clouds.",
    "Wisdom, strength, acuteness; subtlety in material things: grace and dexterity.\nIf ill dignified, she is frivolous and cunning.\nShe rules a quadrant of the heavens around Kether.\nEarth of Air\nPrincess and Empress of the Sylphs and Sylphides.\nThrone of the Ace of Wands.")),
  KNIGHT_OF_SWORDS: Object.freeze(new Card('KnightOfSwords.png', Suits.SWORDS, Ranks.KNIGHT, Facings.LEFT, 11, 13, 'The Knight Of Swords',
    "The Lord of the Wind and the Breezes: the King of the Spirits of Air",
    "A Winged Warrior with crowned Winged Helmet, mounted upon a brown steed. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears as a crest a winged six-pointed star, similar to those represented on the heads of Castor and Pollux the Dioscuri, the twins Gemini (a part of which constellation is included in his rule). He holds a drawn sword with the sigil of his scale upon its pommel. Beneath his horse's feet are dark-driving stratus clouds.",
    "He is active, clever, subtle, fierce, delicate, courageous, skilful, but inclined to domineer. Also to overvalue small things, unless well dignified.\nIf ill dignified, deceitful, tyrannical and crafty.\nRules from 20 Degree Taurus to 20 Degree Gemini.\nFire of Air\nKing of the Sylphs and Sylphides.")),
  QUEEN_OF_SWORDS: Object.freeze(new Card('QueenOfSwords.png', Suits.SWORDS, Ranks.QUEEN, Facings.RIGHT, 12, 14, 'The Queen Of Swords',
    "The Queen of the Thrones of Air",
    "A Graceful woman with wavy, curling hair, like a Queen seated upon a Throne and crowned. Beneath the Throne are grey cumulus clouds. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. She wears as a crest a winged child's head. A drawn sword in one hand, and in the other a large, bearded, newly severed head of a man.",
    "Intensely perceptive, keen observation, subtle, quick and confident: often persevering, accurate in superficial things, graceful, fond of dancing and balancing.\nIf ill dignified, cruel, sly, deceitful, unreliable, though with a good exterior.\nRules from 20 Degree Virgo to 20 Degree Libra.\nWater of Air\nQueen of the Sylphs and Sylphides.")),
  KING_OF_SWORDS: Object.freeze(new Card('KingOfSwords.png', Suits.SWORDS, Ranks.KING, Facings.FORWARD, 13, 15, 'The King Of Swords',
    "The Prince of the Chariot of the Winds",
    "A Winged King with Winged Crown, seated in a chariot drawn by Arch Fays, represented as winged youths very slightly dressed, with butterfly wings: heads encircled by a fillet with a pentagram thereon: and holding wands surmounted by pentagrams, the same butterfly wings on their feet and fillets. He has large white wings. One wheel of his chariot is shown. He wears corslet and buskins of scale armour. He bears as a crest a winged angelic head with a pentagram on the brows. Beneath the chariot are grey nimbus clouds. His hair long and waving in serpentine whirls, and whorl figures compose the scales of his armour. A drawn sword in one hand; a sickle in the other. With the sword he rules, with the sickle he slays.",
    "Full of ideas and thoughts and designs, distrustful, suspicious, firm in friendship and enmity; careful, observant, slow, over-cautious, symbolizes GR:Alpha and GR:Omega; he slays as fast as he creates.\nIf ill dignified: harsh, malicious, plotting; obstinate, yet hesitating; unreliable.\nRules from 20 Degree Capricorn to 20 Degree Aquarius.\nAir of Air\nPrince and Emperor of the Sylphs and Sylphides.")),

  ACE_OF_PENTACLES: Object.freeze(new Card('AceOfPentacles.png', Suits.PENTACLES, Ranks.ACE, Facings.NONE, 0, 4, 'The Ace Of Pentacles',
    'The Root of the Powers of Earth',
    "A White Radiant Angelic Hand, holding a branch of a Rose Tree, whereon is a large Pentacle, formed of Five concentric circles. The Innermost Circle is white, charged with a red Greek Cross. From this White Centre, Twelve Rays, also white, issue: these terminate at the circumference, making the whole something like an Astrological figure of the Heavens.\nIt is surmounted by a small circle, above which is a large white Maltese Cross, and with two white wings.\nFour Crosses and two buds are shown. The Hand issueth from the Clouds as in the other three cases.",
    "It represents materiality in all senses, good and evil: and is, therefore, in a sense, illusionary: it shows material gain, labour, power, wealth, etc")),
  TWO_OF_PENTACLES: Object.freeze(new Card('TwoOfPentacles.png', Suits.PENTACLES, Ranks.TWO, Facings.RIGHT, 1, 36, 'The Two Of Pentacles',
    "The Lord of Harmonious Change",
    "TWO wheels, disks or pentacles, similar to that of the Ace. They are united by a green-and-gold serpent, bound about them like a figure of 8. It holds its tail in its mouth. A White Radiant Angelic Hand holds the centre of the whole. No roses enter into this card. Above and below are the symbols of Jupiter and Capricorn. It is a revolving symbol.",
    "The harmony of change, alternation of gain and loss; weakness and strength; everchanging occupation; wandering, discontented with any fixed condition of things; now elated, then melancholy; industrious, yet unreliable; fortunate through prudence of management, yet sometimes unaccountably foolish; alternatively talkative and suspicious. Kind, yet wavering and inconsistent. Fortunate in journeying. Argumentative.\nChokmah of HB:H (<span direction='rtl'></span>) (Pleasant change, visit to friends).\nHerein the Angels HB:LKBAL (<span direction='rtl'></span>) and HB:VShRYH (<span direction='rtl'></span>) have rule.")),
  THREE_OF_PENTACLES: Object.freeze(new Card('ThreeOfPentacles.png', Suits.PENTACLES, Ranks.THREE, Facings.NONE, 2, 37, 'The Three Of Pentacles',
    "The Lord of Material Works",
    "A WHITE-WINGED Angelic Hand, as before, holding a branch of a rose tree, of which two white rosebuds touch and surmount the topmost Pentacle. The Pentacles are arranged in an equilateral triangle. Above and below the symbols Mars and Capricorn.",
    "Working and constructive force, building up, creation, erection; realization and increase of material things; gain in commercial transactions, rank; increase of substance, influence, cleverness in business, selfishness. Commencement of matters to be established later. Narrow and prejudiced. Keen in matters of gain; sometimes given to seeking after impossibilities.\nBinah of HB:H (<span direction='rtl'></span>) (<span direction='rtl'>ה </span>) Business, paid employment, commercial transaction.\nHerein are HB:YChVYH (<span direction='rtl'></span>) (<span direction='rtl'></span>) and HB:LHChYH (<span direction='rtl'></span>) Angelic Rulers.")),
  FOUR_OF_PENTACLES: Object.freeze(new Card('FourOfPentacles.png', Suits.PENTACLES, Ranks.FOUR, Facings.FORWARD, 3, 38, 'The Four Of Pentacles',
    "The Lord of Earthly Power",
    "A HAND holding a branch of a rose tree, but without flowers or buds, save that in the centre is one fully blown white rose. Pentacles are disposed as on the points of a square; a rose in its centre. Symbols Sun and Capricorn above and below to represent the Decan.",
    "Assured material gain: success, rank, dominion, earthy power, completed but leading to nothing beyond. Prejudicial, covetous, suspicious, careful and orderly, but discontented. Little enterprise or originality. According to dignity as usual.\nChesed of HB:H (<span direction='rtl'></span>) (Gain of money or influence: a present).\nHerein do HB:KVQYH (<span direction='rtl'></span>) and HB:MNDAL (<span direction='rtl'></span>) bear rule.")),
  FIVE_OF_PENTACLES: Object.freeze(new Card('FiveOfPentacles.png', Suits.PENTACLES, Ranks.FIVE, Facings.RIGHT, 4, 48, 'The Five Of Pentacles',
    "The Lord of Material Trouble", "A WHITE Radiant Angelic Hand issuing from clouds, and holding a branch of the white rose tree, but from which the roses are falling, and leaving no buds behind. Five Pentacles similar to the Ace. Above and below are Mercury and Taurus", "Loss of money or position. Trouble about material things. Labour, toil, land cultivation; building, knowledge and acuteness of earthly things, poverty, carefulness, kindness; sometimes money regained after severe toil and labour.\nUnimaginative, harsh, stern, determined, obstinate.\nGeburah of HB:H (<span direction='rtl'></span>) (Loss of profession, loss of money, monetary anxiety).\nHerein the angels HB:MBHYH (<span direction='rtl'></span>) and HB:PNYAL (<span direction='rtl'></span>) rule.")),
  SIX_OF_PENTACLES: Object.freeze(new Card('SixOfPentacles.png', Suits.PENTACLES, Ranks.SIX, Facings.NONE, 5, 49, 'The Six Of Pentacles',
    "The Lord of Material Success", "A WHITE Radiant Angelic Hand holding a rose branch with white roses and buds, each of which touches a Pentacle. Pentacles are arranged in two columns of three each.\nAbove and below are the symbols Taurus and Moon of the Decan", "Success and gain in material undertakings. Power, influence, rank, nobility, rule over the people. Fortunate, successful, liberal and just.\nIf ill dignified, may be purse-proud, insolent from excess, or prodigal.\nTiphareth of HB:H (<span direction='rtl'></span>) (Success in material things, prosperity in business).\nHerein rule the Angels HB:NMMYH (<span direction='rtl'></span>) and HB:YYLAL (<span direction='rtl'></span>)")),
  SEVEN_OF_PENTACLES: Object.freeze(new Card('SevenOfPentacles.png', Suits.PENTACLES, Ranks.SEVEN, Facings.LEFT, 6, 50, 'The Seven Of Pentacles',
    "The Lord of Success Unfulfilled", "A WHITE Radiating Angelic Hand issuing from a cloud, and holding a white rose branch. Seven Pentacles arranged like the geomantic figure Rubeus.\nThere are only five buds, which overhang, but do not touch the five uppermost\nPentacles. Above and below are the Decan symbols, Saturn and Taurus respectively. ", "Promises of success unfulfilled. (shown, as it were, by the fact that the rosebuds do not come to anything.) Loss of apparently promising fortune. Hopes deceived and crushed. Disappointment, misery, slavery, necessity and baseness. A cultivator of land, and yet a loser thereby. Sometimes it denotes slight and isolated gains with no fruits resulting therefrom, and of no further account, though seeming to promise well.\nNetzach of HB:H (<span direction='rtl'></span>) (Unprofitable speculations and employments; little gain for much labour).\nTherein HB:HRChAL (<span direction='rtl'></span>) and HB:MTzRAL (<span direction='rtl'></span>) are ruling Angels")),
  EIGHT_OF_PENTACLES: Object.freeze(new Card('EightOfPentacles.png', Suits.PENTACLES, Ranks.EIGHT, Facings.RIGHT, 7, 24, 'The Eight Of Pentacles',
    "The Lord of Prudence",
    "A WHITE Radiating Angelic Hand, issuing from a cloud, and grasping a branch of a rose tree, with four white roses thereon, which touch only the four lowermost Pentacles. No rosebuds even, but only leaves, touch the four uppermost disks. All the Pentacles are similar to that of the Ace, but without the Maltese cross and wings. They are arranged like the geomantic figure Populus. Above and below them are the symbols Sun and Virgo for the Decan.",
    "Over-careful in small things at the expense of great: \"Penny wise and pound foolish\": gain of ready money in small sums; mean; avaricious; industrious; cultivation of land; hoarding, lacking in enterprise.\nHod of HB:H (<span direction='rtl'>\u05D4</span>) (Skill: prudence: cunning).\nTherein rule those mighty Angels HB:AKAYH (<span direction='rtl'></span>) and HB:KHThAL. (<span direction='rtl'></span>)")),
  NINE_OF_PENTACLES: Object.freeze(new Card('NineOfPentacles.png', Suits.PENTACLES, Ranks.NINE, Facings.RIGHT, 8, 25, 'The Nine Of Pentacles',
    "The Lord of Material Gain",
    "A WHITE Radiating Angelic Hand, holding a rose branch with nine white roses, each of which touches a Pentacle. The Pentacles are arranged thus four above, four below and one centerred and there are rosebuds on the branches as well as flowers. Venus and Virgo above and below. ",
    "Complete realization of material gain, good, riches; inheritance; covetous; treasuring of goods; and sometimes theft and knavery. The whole according to dignity.\nYesod of HB:H (<span direction='rtl'></span>) (Inheritance, much increase of goods).\nHerein those mighty Angels HB:HZYAL (<span direction='rtl'></span>) and HB:ALDYH (<span direction='rtl'></span>) have rule and dominion")),
  TEN_OF_PENTACLES: Object.freeze(new Card('TenOfPentacles.png', Suits.PENTACLES, Ranks.TEN, Facings.NONE, 9, 26, 'The Ten Of Pentacles',
    "The Lord of Wealth",
    "AN Angelic Hand, holding by the lower extremity a branch whose roses touch all the Pentacles. No buds, however, are shown. The symbols of Mercury and Virgo are above and below. The Pentacles are arranged two at the top, one centerred, four in the midle, another centerred, and two at the bottom.",
    "Completion of material gain and fortune; but nothing beyond: as it were, at the very pinnacle of success. Old age, slothfulness; great wealth, yet sometimes loss in part; heaviness; dullness of mind, yet clever and prosperous in money transactions.\nMalkuth of HB:H (<span direction='rtl'></span>) (Riches and wealth).\nHerein are HB:LAVYH (<span direction='rtl'></span>) and HB:HHa (<span direction='rtl'></span>)'aYH set over this Decan as Angel Rulers.")),
  PAGE_OF_PENTACLES: Object.freeze(new Card('PageOfPentacles.png', Suits.PENTACLES, Ranks.PAGE, Facings.RIGHT, 10, 20, 'The Page Of Pentacles',
    "The Princess of the Echoing Hills: the Rose of the Palace of Earth",
    "A STRONG and beautiful Amazon figure with rich brown hair, standing on grass or flowers. A grove of trees near her. Her form suggests Hebe, Ceres, and Proserpine. She bears a winged ram's head as a crest: and wears a mantle of sheepskin. In one hand she carries a sceptre with a circular disk: in the other a Pentacle similar to that of the Ace of Pentacles.",
    "She is generous, kind, diligent, benevolent, careful, courageous, persevering, pitiful.\nIf ill dignified she is wasteful and prodigal. She rules over one quadrant of the heavens around the North Pole of the Ecliptic.\nEarth of Earth\nPrincess and Empress of the Gnomes.\nThrone of the Ace of Pentacles.")),
  KNIGHT_OF_PENTACLES: Object.freeze(new Card('KnightOfPentacles.png', Suits.PENTACLES, Ranks.KNIGHT, Facings.RIGHT, 11, 17, 'The Knight Of Pentacles',
    "The Lord of the Wide and Fertile Land: the King of the Spirits of Earth",
    "A Dark Winged Warrior with winged and crowned helmet: mounted on a light brown horse. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears the winged head of a stag or antelope as a crest. Beneath the horse's feet is fertile land with ripened corn. In one hand he bears a sceptre surmounted by a hexagram: in the other a Pentacle like that of the Zelator Adeptus Minor.",
    "Unless very well dignified he is heavy, dull, and material. Laborious, clever, and patient in material matters.\nIf ill dignified, he is avaricious, grasping, dull, jealous; not very courageous, unless assisted by other symbols.\nRules from above 20 Degree of Leo to 20 Degree of Virgo.\nFire of Earth\nKing of Gnomes.")),
  QUEEN_OF_PENTACLES: Object.freeze(new Card('QueenOfPentacles.png', Suits.PENTACLES, Ranks.QUEEN, Facings.LEFT, 12, 18, 'The Queen Of Pentacles',
    "The Queen of the Thrones of Earth",
    "A Woman of beautiful face with dark hair; seated upon a throne, beneath which is dark sandy earth. One side of her face is light, the other dark; and her symbolism is best represented in profile. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. She bears a winged goat's head as a crest. A goat is by her side. In one hand she bears a sceptre surmounted by a cube, and in the other an orb of gold.",
    "She is impetuous, kind; timid, rather charming; great-hearted; intelligent, melancholy; truthful, yet of many moods.\nIf ill dignified she is undecided, capricious, changeable, foolish.\nShe rules from 20 Degree Sagittarius to 20 Degree Capricorn.\nWater of Earth\nThe Queen of Gnomes.")),
  KING_OF_PENTACLES: Object.freeze(new Card('KingOfPentacles.png', Suits.PENTACLES, Ranks.KING, Facings.RIGHT, 13, 19, 'The King Of Pentacles',
    "The Prince of the Chariot of Earth",
    "A Winged Kingly Figure seated in a chariot drawn by a bull. He bears as a crest the symbol of the head of the winged bull. Beneath the chariot is land, with many flowers. In the one hand he bears an orb of gold held downwards, and in the other a sceptre surmounted by an orb and cross.",
    "Increase of matter. Increases good or evil, solidifies; practically applies things. Steady; reliable.\nIf ill dignified he is selfish, animal and material: stupid. In either case slow to anger, but furious if roused.\nRules from 20 Degree Aries to 20 Degree Taurus.\nAir of Earth\nPrince and Emperor of the Gnomes.")),
});

export class Deck extends EventTarget {
  constructor(name, slug, cards = []) {
    super();

    this.name = name;
    this.slug = slug;
    this.cards = cards;
    this.key = Symbol();

    this.undrawn = cards.slice();
    this.drawn = [];
    this.shuffle();
  }

  copy() {
    const copy = new Deck();
    return Object.assign(copy, this);
  }

  #emitChangeEvent() {
    this.dispatchEvent(new CustomEvent("deckChange", { detail: {undrawn: this.undrawn, drawn: this.drawn} }));
  }

  drawCard() {
    const next = this.undrawn.shift();
    this.drawn.push(next);
    this.#emitChangeEvent();
    return next;
  }

  pullCard(toPull) {
    const key = typeof toPull === 'Symbol' ? toPull : toPull.key;
    const idx = this.undrawn.findIndex(card => card.key === key);
    if (idx < 0) {
      return null;
    }
    const [next] = this.undrawn.splice(idx, 1);
    this.drawn.push(next);
    this.#emitChangeEvent();
    return next;
  }

  shuffle() {
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = this.undrawn.length - 1; i >= 0; --i) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.undrawn[i], this.undrawn[j]] = [this.undrawn[j], this.undrawn[i]];
    }
    this.#emitChangeEvent();
  }

  reset() {
    this.undrawn = this.cards.slice();
    this.drawn = [];
    this.shuffle()
  }

  cut(point = Math.floor(Math.random() * this.undrawn.length)) {
    this.undrawn = [...this.undrawn.slice(point), ...this.undrawn.slice(0, point)]
    this.#emitChangeEvent();
  }

  getCardImageSrc(card) {
    return `/images/${this.slug}/${card.imageSrc || card}`;
  }
}

export const Decks = Object.freeze({
  RIDER_WAITE_TAROT: Object.freeze(new Deck('Rider Waite', 'RiderWaite', Object.values(Cards))),
  MIDJOUNEY_TAROT: Object.freeze(new Deck('Midjourney', 'Midjourney', Object.values(Cards))),
});

const normalizePlacements = (placements) => {
  const {minX, maxX, minY, maxY} = placements.reduce(
    (bounds, placement) => ({
      minX: Math.min(bounds.minX, placement.x),
      maxX: Math.max(bounds.maxX, placement.x),
      minY: Math.min(bounds.minY, placement.y),
      maxY: Math.max(bounds.maxY, placement.y)
    }), {
      minX: placements[0].x,
      maxX: placements[0].x,
      minY: placements[0].y,
      maxY: placements[0].y
    });

  const rangeX = 1.0 * (maxX - minX);
  const rangeY = 1.0 * (maxY - minY);

  const mapped = placements.map(placement => ({
    ...placement,
    x: (placement.x - minX) / rangeX,
    y: (placement.y - minY) / rangeY,
  }));

  return mapped;
}

export class Placement {
  constructor(x, y, rotation, interpretation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.interpretation = interpretation;
  }
}

export class Spread {
  constructor(name, deckLocation, placements) {
    this.name = name;
    this.placements = {};
    this.placements = {};
    this.deckLocation = {};
    Object.getOwnPropertySymbols(placements).forEach(facing =>
      [this.deckLocation[facing], ...this.placements[facing]] =
        normalizePlacements([deckLocation, ...placements[facing]])
    );

    this.key = Symbol(name);
  }

  isComplete(cardCount) {
    return cardCount >= this.placements.length;
  }

  positionFromPlacement(width, height, placement, insetX, insetY) {
    const {width: cardWidth, height: cardHeight, padX, padY} = 
      getCardSize(width, height);

    const adjustedWidth = width - insetX;
    const adjustedHeight = height - insetY;

    const {x, y, rotation} = placement;
    return new Position(
      x * adjustedWidth,
      y * adjustedHeight,
      cardWidth,
      cardHeight,
      rotation
    );
  }

  getCardPosition(width, height, idx, facing) {
    return this.positionFromPlacement(width, height, this.placements[facing][idx]);
  }

  getDeckPosition(width, height, facing) {
    return this.positionFromPlacement(width, height, this.deckLocation[facing]);
  }

  getStyles(className, width, height, offset, insetX = 0, insetY = 0, facing = Facings.LEFT, ) {
    const key = facing === Facings.RIGHT ? Facings.RIGHT : Facings.LEFT;
    const placements = this.placements[key] || [];
    return placements.map((placement, idx) => {
      const {x, y, rotation} = this.positionFromPlacement(width, height, placement, insetX, insetY);
      return `
        .${className}:nth-child(${idx + offset + 1}) {
          left: ${x}px;
          top: ${y}px;
          transform: rotate(${placement.rotation}rad);
        }`
    }).join('');
  }
}

export const Spreads = Object.freeze({
  CELTIC: Object.freeze(new Spread('Celtic Divination', 
    new Placement(1, 1, Rotations.UPRIGHT, ``), 
    {
      [Facings.RIGHT]: [
        new Placement(2, 4, Rotations.UPRIGHT, `The Significator`),
        new Placement(2, 4, Rotations.UPRIGHT, `This covers the Significator. This card gives the influence which is affecting the Querent or Question generally, the atmosphere of it in which the other currents work.`),
        new Placement(2, 4, Rotations.RIGHT, `This crosses the Significator. It shows the nature of the obstacles in the Question. If it is a favourable card, the opposing forces will not be serious, or it may indicate that something good in itself will not be productive of good in the particular connexion.`),
        new Placement(2, 7, Rotations.UPRIGHT, `This crowns the Significator. It represents (a) the Querent's aim or ideal in the Question; (b) the best that can be achieved under the circumstances, but that which has not yet been made actual.`),
        new Placement(2, 1, Rotations.UPRIGHT, `This is beneath the Significator. It shows the foundation or basis of the Question, that which has already passed into actuality and which the Significator has made his own.`),
        new Placement(1, 4, Rotations.UPRIGHT, `This is before the Significator. It shows the influence that is coming into action and will operate in the near future.`),
        new Placement(3, 4, Rotations.UPRIGHT, `This is behind the Significator. It gives the influence that is just passed, or is now passing away.`),
        new Placement(4, 7, Rotations.UPRIGHT, `This represents the Significator itself and shows its position or attitude in the circumstances.`),
        new Placement(4, 5, Rotations.UPRIGHT, `This represents the Significator's house, that is, his environment and the tendencies at work therein which have an effect on the Question. For instance, his position in life, the influence of immediate friends, and so forth`),
        new Placement(4, 3, Rotations.UPRIGHT, `This represents the hopes or fears of the Querent with regard to the Question`),
        new Placement(4, 1, Rotations.UPRIGHT, `This represents what will come, the final result, the culmination which is brought about by the influences shown by the other cards that have been turned up in the divination. `),
      ],
      [Facings.LEFT]: [
        new Placement(2, 4, Rotations.UPRIGHT, `The Significator`),
        new Placement(2, 4, Rotations.UPRIGHT, `This covers the Significator. This card gives the influence which is affecting the Querent or Question generally, the atmosphere of it in which the other currents work.`),
        new Placement(2, 4, Rotations.RIGHT, `This crosses the Significator. It shows the nature of the obstacles in the Question. If it is a favourable card, the opposing forces will not be serious, or it may indicate that something good in itself will not be productive of good in the particular connexion.`),
        new Placement(2, 7, Rotations.UPRIGHT, `This crowns the Significator. It represents (a) the Querent's aim or ideal in the Question; (b) the best that can be achieved under the circumstances, but that which has not yet been made actual.`),
        new Placement(2, 1, Rotations.UPRIGHT, `This is beneath the Significator. It shows the foundation or basis of the Question, that which has already passed into actuality and which the Significator has made his own.`),
        new Placement(3, 4, Rotations.UPRIGHT, `This is behind the Significator. It gives the influence that is just passed, or is now passing away.`),
        new Placement(1, 4, Rotations.UPRIGHT, `This is before the Significator. It shows the influence that is coming into action and will operate in the near future.`),
        new Placement(4, 7, Rotations.UPRIGHT, `This represents the Significator itself and shows its position or attitude in the circumstances.`),
        new Placement(4, 5, Rotations.UPRIGHT, `This represents the Significator's house, that is, his environment and the tendencies at work therein which have an effect on the Question. For instance, his position in life, the influence of immediate friends, and so forth`),
        new Placement(4, 3, Rotations.UPRIGHT, `This represents the hopes or fears of the Querent with regard to the Question`),
        new Placement(4, 1, Rotations.UPRIGHT, `This represents what will come, the final result, the culmination which is brought about by the influences shown by the other cards that have been turned up in the divination. `),
      ],
    },
  )),
});
