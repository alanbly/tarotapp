

export class Suit {
  constructor(name, interpretation) {
    this.name = name;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Suits = Object.freeze({
  MAJOR:     Object.freeze(new Suit('Major Arcana', "Strong forces beyond the Querent's control")),
  WANDS:     Object.freeze(new Suit('Wands',        "Energy, opposition, quarrel")),
  CUPS:      Object.freeze(new Suit('Cups',         "Pleasure, merriment")),
  SWORDS:    Object.freeze(new Suit('Swords',       "Trouble, sadness, sickness, death")),
  PENTACLES: Object.freeze(new Suit('Pentacles',    "Business, money, possessions")),
});

export class Rank {
  constructor(name, interpretation) {
    this.name = name;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Ranks = Object.freeze({
  KEY:    Object.freeze(new Rank('Key',    "Strong forces beyond the Querent's control")),
  ACE:    Object.freeze(new Rank('Ace',    "Strength generally. Aces are always strong cards")),
  TWO:    Object.freeze(new Rank('Two',    "")),
  THREE:  Object.freeze(new Rank('Three',  "")),
  FOUR:   Object.freeze(new Rank('Four',   "")),
  FIVE:   Object.freeze(new Rank('Five',   "")),
  SIX:    Object.freeze(new Rank('Six',    "")),
  SEVEN:  Object.freeze(new Rank('Seven',  "")),
  EIGHT:  Object.freeze(new Rank('Eight',  "")),
  NINE:   Object.freeze(new Rank('Nine',   "")),
  TEN:    Object.freeze(new Rank('Ten',    "")),
  PAGE:   Object.freeze(new Rank('Page',   "Opinions, thoughts, ideas, either in harmony with or opposed to, the subject")),
  KNIGHT: Object.freeze(new Rank('Knight', "Coming or going of a matter, according as they face")),
  QUEEN:  Object.freeze(new Rank('Queen',  "Women are connected with the matter.")),
  KING:   Object.freeze(new Rank('King',   "Men are connected with the matter.")),
});

export class Card {
  constructor(imageSrc, suit, rank, number, rank, name, title, description, interpretation) {
    this.imageSrc = imageSrc;
    this.suit = suit;
    this.number = number;
    this.name = name;
    this.title = title;
    this.description = description;
    this.interpretation = interpretation;
    this.key = Symbol(name);
  }
}

export const Cards = Object.freeze({
  FOOL:                Object.freeze(new Card('/images/TheFool.png',           Suits.MAJOR, Ranks.KEY, 0,  57, 'The Fool',
    'The Spirit of Æther (GR:Alpha-iota-theta-eta-rho)',
    "",
    "IF the question refers to spiritual matters, the Fool means idea, thought, spirituality, that which endeavours to transcend Earth. But if question is material, it means folly, stupidity, eccentricity, or even mania. ")),
  MAGICIAN:            Object.freeze(new Card('/images/TheMagician.png',       Suits.MAJOR, Ranks.KEY, 1,  58, 'The Magician',
    'The Magus of Power',
    "",
    "Skill, wisdom, adaptation, craft, cunning, or occult wisdom or power.")),
  HIGH_PRIESTESS:      Object.freeze(new Card('/images/TheHighPriestess.png',  Suits.MAJOR, Ranks.KEY, 2,  59, 'The High Priestess',
    'The Priestess of the Silver Star',
    "",
    "Change, alternation, increase and decrease, fluctuation; whether for good or evil depends on the dignity.")),
  EMPRESS:             Object.freeze(new Card('/images/TheEmpress.png',        Suits.MAJOR, Ranks.KEY, 3,  60, 'The Empress',
    'The Daughter of the Mighty Ones',
    "",
    "Beauty, happiness, pleasure, success. But with very bad dignity it means luxury, dissipation.")),
  EMPEROR:             Object.freeze(new Card('/images/TheEmperor.png',        Suits.MAJOR, Ranks.KEY, 4,  61, 'The Emperor',
    'Sun of the Morning, chief among the Mighty',
    "",
    "War, conquest, victory, strife, ambition.")),
  HIEROPHANT:          Object.freeze(new Card('/images/TheHierophant.png',     Suits.MAJOR, Ranks.KEY, 5,  62, 'The Hierophant',
    'The Magus of the Eternal',
    "",
    "Divine wisdom, manifestation, explanation, teaching, occult force voluntarily invoked.")),
  LOVERS:              Object.freeze(new Card('/images/TheLovers.png',         Suits.MAJOR, Ranks.KEY, 6,  63, 'The Lovers',
    'The Children of the Zain Gemini Voice; the Oracles of the Mighty Gods',
    "",
    "Inspiration (passive, mediumistic), motive power, action.")),
  CHARIOT:             Object.freeze(new Card('/images/TheChariot.png',        Suits.MAJOR, Ranks.KEY, 7,  64, 'The Chariot',
    'The Child of the Powers of the Waters; the Lord of the Triumph of Light',
    "",
    "Triumph, victory, health (sometimes unstable).")),
  STRENGTH:            Object.freeze(new Card('/images/TheStrength.png',       Suits.MAJOR, Ranks.KEY, 8,  65, 'The Strength',
    'The Daughter of the Flaming Sword',
    "",
    "Eternal justice. Strength and force, but arrested as in act of judgment. May mean law, trial, etc.")),
  HERMIT:              Object.freeze(new Card('/images/TheHermit.png',         Suits.MAJOR, Ranks.KEY, 9,  66, 'The Hermit',
    'The Magus of the Voice of Power, the Prophet of the Eternal',
    "",
    'Wisdom from on high. Active divine inspiration. Sometimes "unexpected current."')),
  WHEEL_OF_FORTUNE:    Object.freeze(new Card('/images/TheWheelOfFortune.png', Suits.MAJOR, Ranks.KEY, 10, 67, 'The Wheel of Fortune',
    'The Lord of the of Fate Forces of Life',
    "",
    "Good fortune, happiness (within bounds). Intoxication of success.")),
  JUSTICE:             Object.freeze(new Card('/images/Justice.png',           Suits.MAJOR, Ranks.KEY, 11, 68, 'Justice',
    'The Daughter of the Lords of Truth: the Ruler of the Balance',
    "",
    "Courage, strength, fortitude, power passing on to action. Obstinacy.")), 
  HANGED_MAN:          Object.freeze(new Card('/images/TheHangedMan.png',      Suits.MAJOR, Ranks.KEY, 12, 69, 'The Hanged Man',
    'The Spirit of the Mighty Waters',
    "",
    "Enforced sacrifice, punishment, loss, fatal and not voluntary, suffering.")),
  DEATH:               Object.freeze(new Card('/images/Death.png',             Suits.MAJOR, Ranks.KEY, 13, 70, 'Death',
    'The Child of the Great Transformers: the Lord of the Gates of Death',
    "",
    "Time, age, transformation, change involuntary (as opposed to 18, Pisces). Or death, destruction (only latter with special cards).")), 
  TEMPERANCE:          Object.freeze(new Card('/images/Temperance.png',        Suits.MAJOR, Ranks.KEY, 14, 71, 'Temperance',
    'The Daughter of the Reconcilers: the Bringer-Forth of life',
    "",
    "Combination of forces, realization, action (material effect, good or evil).")),
  DEVIL:               Object.freeze(new Card('/images/TheDevil.png',          Suits.MAJOR, Ranks.KEY, 15, 72, 'The Devil',
    'The Lord of the Gates of Matter: the Child of the Forces of Time',
    "",
    "Materiality, material force, material temptation, obsession.")),
  TOWER:               Object.freeze(new Card('/images/TheTower.png',          Suits.MAJOR, Ranks.KEY, 16, 73, 'The Tower',
    'The Lord of the Hosts of the Mighty',
    "",
    "Ambition, fighting, war, courage, or destruction, danger, fall, ruin.")),
  STAR:                Object.freeze(new Card('/images/TheStar.png',           Suits.MAJOR, Ranks.KEY, 17, 74, 'The Star',
    'The Daughter of the Firmament, the dweller between the Waters',
    "",
    "Hope, faith, unexpected help. Or dreaminess, deceived hope, etc.")),
  MOON:                Object.freeze(new Card('/images/TheMoon.png',           Suits.MAJOR, Ranks.KEY, 18, 75, 'The Moon',
    'The Ruler of Flux and Reflux: the Child of the Sons of the Mighty',
    "",
    "Dissatisfaction, voluntary change. Error, lying, falsity, deception. This card is very sensitive to dignity.")),
  SUN:                 Object.freeze(new Card('/images/TheSun.png',            Suits.MAJOR, Ranks.KEY, 19, 76, 'The Sun',
    'The Lord of the Fire of the World',
    "",
    "Glory, gain, riches. With "very" evil cards it means arrogance, display, vanity.")),
  JUDGEMENT:           Object.freeze(new Card('/images/Judgement.png',         Suits.MAJOR, Ranks.KEY, 20, 77, 'Judgement',
    'The Spirit of the Primal Fire',
    "",
    'Final decision, judgment, sentence, determination of a matter without appeal, "on its plane."')),
  WORLD:               Object.freeze(new Card('/images/TheWorld.png',          Suits.MAJOR, Ranks.KEY, 21, 78, 'The World',
    'The Great One of the Night of Time',
    "",
    "The matter itself. Synthesis, world, kingdom. Usually denotes actual subject of question, and therefore depends entirely on accompanying cards.")),

  ACE_OF_WANDS:    Object.freeze(new Card('/images/AceOfWands.png',    Suits.WANDS, Ranks.ACE,    0,  1,  'The Ace Of Wands',
    "The Root of the Powers of Fire",
    "A White Radiating Angelic Hand, issuing from clouds, and grasping a heavy club, which has three branches in the colours, and with the sigils, of the scales. The Right-and Left-hand branches end respectively in three Flames, and the Centre one in four Flames: thus yielding Ten: the Number of the Sephiroth. Two-and-twenty leaping Flames, or Yodh, surround it, answering to the Paths; of these, three fall below the Right branch for Aleph, Men, and Shin, seven above the Central branch for the double letters; and between it and that of the Right twelve: six above and six below about the Left-hand branch. The whole is a great and flaming Torch.",
    "It symbolizes Force -- strength, rush, vigour, energy, and it governs, according to its nature, various works and questions. It implies Natural, as opposed to Invoked, Force.")),
  TWO_OF_WANDS:    Object.freeze(new Card('/images/TwoOfWands.png',    Suits.WANDS, Ranks.TWO,    1,  45, 'The Two Of Wands',
    "The Lord of Dominion", "", "")),
  THREE_OF_WANDS:  Object.freeze(new Card('/images/ThreeOfWands.png',  Suits.WANDS, Ranks.THREE,  2,  46, 'The Three Of Wands',
    "The Lord of Established Strength", "", "")),
  FOUR_OF_WANDS:   Object.freeze(new Card('/images/FourOfWands.png',   Suits.WANDS, Ranks.FOUR,   3,  47, 'The Four Of Wands',
    "The Lord of Perfected Work", "", "")),
  FIVE_OF_WANDS:   Object.freeze(new Card('/images/FiveOfWands.png',   Suits.WANDS, Ranks.FIVE,   4,  21, 'The Five Of Wands',
    "The Lord of Strife", "", "")),
  SIX_OF_WANDS:    Object.freeze(new Card('/images/SixOfWands.png',    Suits.WANDS, Ranks.SIX,    5,  22, 'The Six Of Wands',
    "The Lord of Victory", "", "")),
  SEVEN_OF_WANDS:  Object.freeze(new Card('/images/SevenOfWands.png',  Suits.WANDS, Ranks.SEVEN,  6,  23, 'The Seven Of Wands',
    "The Lord of Valour", "", "")),
  EIGHT_OF_WANDS:  Object.freeze(new Card('/images/EightOfWands.png',  Suits.WANDS, Ranks.EIGHT,  7,  33, 'The Eight Of Wands',
    "The Lord of Swiftness", "", "")),
  NINE_OF_WANDS:   Object.freeze(new Card('/images/NineOfWands.png',   Suits.WANDS, Ranks.NINE,   8,  34, 'The Nine Of Wands',
    "The Lord of Great Strength", "", "")),
  TEN_OF_WANDS:    Object.freeze(new Card('/images/TenOfWands.png',    Suits.WANDS, Ranks.TEN,    9,  35, 'The Ten Of Wands',
    "The Lord of Oppression", "", "")),
  PAGE_OF_WANDS:   Object.freeze(new Card('/images/PageOfWands.png',   Suits.WANDS, Ranks.PAGE,   10, 8,  'The Page Of Wands',
    "The Princess of the Shining Flame: the Rose of the Palace of Fire", 
    "A Very strong and beautiful woman with flowing red-gold hair, attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back; and having a winged tiger's head in front. She wears a Corinthian-shaped helmet and crown with a long plume. It also is surmounted by a tiger's head, and the same symbol forms the buckle of her scalemail buskins. A mantle lined with tiger's skin falls back from her shoulders. Her right hand rests on a small golden or brazen altar ornamented with ram's heads and with Flames of Fire leaping from it. Her left hand leans on a long and heavy club, swelling at the lower end, where the sigil is placed; and it has flames of fire leaping from it the whole way down; but the flames are ascending. This club or torch is much longer than that carried by the King or Queen. Beneath her firmly placed feet are leaping Flames of Fire.",
    "Brilliance, courage, beauty, force, sudden in anger or love, desire of power, enthusiasm, revenge.\nIf ill dignified, she is superficial, theatrical, cruel, unstable, domineering.\nShe rules the heavens over one quadrant of the portion around the North Pole.\nEarth of Fire\nPrincess and Empress of the Salamanders.\nThrone of the Ace of Wands.")),
  KNIGHT_OF_WANDS: Object.freeze(new Card('/images/KnightOfWands.png', Suits.WANDS, Ranks.KNIGHT, 11, 5,  'The Knight Of Wands',
    "The Lord of the Flame and Lighting: the King of the Spirits of Fire",
    "A Winged Warrior riding upon a black horse with flaming mane and tail: the horse itself is not winged. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears as a crest a winged black horse's head. He grasps a club with flaming ends, somewhat similar to that in the symbol of the Ace of Wands, but not so heavy, and also the sigil of his scale is shown; beneath the rushing feet of his steed are waving flames and fire. He is active, generous, fierce, sudden, impetuous.",
    "If ill dignified, he is evil-minded, cruel, bigoted, brutal. He rules the celestial heavens from above the Twentieth Degree of Scorpio to the First Two Decans of Sagittarius: and this includes a part of the Constellation Hercules. (Hercules is always represented with a Club.)\nFire of Fire\nKing of the Salamanders.")),
  QEEEN_OF_WANDS:  Object.freeze(new Card('/images/QeeenOfWands.png',  Suits.WANDS, Ranks.QEEEN,  12, 6,  'The Qeeen Of Wands',
    "The Queen of the Thrones of Flame",
    "A Crowned queen with long red-golden hair, seated upon a Throne, with steady flames beneath. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. On cuirass and buskins are leopard's heads winged, and the same symbol surmounteth her crown. At her side is a couchant leopard on which her hands rest. She bears a long wand with a very heavy conical head. The face is beautiful and resolute.",
    "Adaptability, steady force applied to an object, steady rule, great attractive power, power of command, yet liked notwithstanding. Kind and generous when not opposed.\nIf ill dignified, obstinate, revengeful, domineering, tyrannical, and apt to turn against another without a cause.\nShe rules the heavens from above the last Decan of Pisces to above the 20 Degree of Aries: including thus a part of Andromeda.\nWater of Fire\nQueen of the Salamanders.")),
  KING_OF_WANDS:   Object.freeze(new Card('/images/KingOfWands.png',   Suits.WANDS, Ranks.KING,   13, 7,  'The King Of Wands',
    "The Prince of the Chariot of Fire",
    "A Kingly Figure with a golden, winged crown, seated on a chariot. He has large white wings. One wheel of his chariot is shewn. He wears corslet and buskins of scale armour decorated with a winged lion's head, which symbol also surmounts his crown. His chariot is drawn by a lion. His arms are bare, save for the shoulder-pieces of the corslet, and he bears a torch or fire-wand, somewhat similar to that of the Zelator Adeptus Minor. Beneath the chariot are flames, some waved, some salient.",
    "Swift, strong, hasty; rather violent, yet just and generous; noble and scorning meanness.\nIf ill dignified cruel, intolerant, prejudiced and ill natured. He rules the heavens from above the last Decan of Cancer to the second Decan of Leo; hence he includes most of Leo Minor.\nAir of Fire\nPrince and Emperor of Salamanders.")),

  ACE_OF_CUPS:    Object.freeze(new Card('/images/AceOfCups.png',    Suits.CUPS, Ranks.ACE,    0,  2,  'The Ace Of Cups',
    "The Root of the Powers of Water",
    "A White Radiant Angelic Hand, issuing from clouds, and supporting on the palm thereof a cup, resembling that of the Stolistes. From it rises a fountain of clear and glistening water: and sprays falling on all sides into clear calm water below, in which grow Lotuses and Water-lilies. The great Letter of the Supernal Mother is traced in the spray of the Fountain.",
    "Fertility -- productiveness, beauty, pleasure, happiness, etc.")),
  TWO_OF_CUPS:    Object.freeze(new Card('/images/TwoOfCups.png',    Suits.CUPS, Ranks.TWO,    1,  54, 'The Two Of Cups',
    "The Lord of Love", "", "")),
  THREE_OF_CUPS:  Object.freeze(new Card('/images/ThreeOfCups.png',  Suits.CUPS, Ranks.THREE,  2,  55, 'The Three Of Cups',
    "The Lord of Abundance", "", "")),
  FOUR_OF_CUPS:   Object.freeze(new Card('/images/FourOfCups.png',   Suits.CUPS, Ranks.FOUR,   3,  56, 'The Four Of Cups',
    "The Lord of Blended Pleasure", "", "")),
  FIVE_OF_CUPS:   Object.freeze(new Card('/images/FiveOfCups.png',   Suits.CUPS, Ranks.FIVE,   4,  30, 'The Five Of Cups',
    "The Lord of Loss in Pleasure", "", "")),
  SIX_OF_CUPS:    Object.freeze(new Card('/images/SixOfCups.png',    Suits.CUPS, Ranks.SIX,    5,  31, 'The Six Of Cups',
    "The Lord of Pleasure", "", "")),
  SEVEN_OF_CUPS:  Object.freeze(new Card('/images/SevenOfCups.png',  Suits.CUPS, Ranks.SEVEN,  6,  32, 'The Seven Of Cups',
    "The Lord of Illusionary Success", "", "")),
  EIGHT_OF_CUPS:  Object.freeze(new Card('/images/EightOfCups.png',  Suits.CUPS, Ranks.EIGHT,  7,  42, 'The Eight Of Cups',
    "The Lord of Abandoned Success", "", "")),
  NINE_OF_CUPS:   Object.freeze(new Card('/images/NineOfCups.png',   Suits.CUPS, Ranks.NINE,   8,  43, 'The Nine Of Cups',
    "The Lord of Material Happiness", "", "")),
  TEN_OF_CUPS:    Object.freeze(new Card('/images/TenOfCups.png',    Suits.CUPS, Ranks.TEN,    9,  44, 'The Ten Of Cups',
    "The Lord of Perfected Success", "", "")),
  PAGE_OF_CUPS:   Object.freeze(new Card('/images/PageOfCups.png',   Suits.CUPS, Ranks.PAGE,   10, 12, 'The Page Of Cups',
    "The Princess of the Waters: the Lotus of the Palace of the Floods",
    "A Beautiful Amazon-like figure, softer in nature than the Princess of Wands.  Attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back. She stands on a sea with foaming spray. Away to her right a Dolphin. She wears as a crest a swan with opening wings. She bears in one hand a lotus, and in the other an open cup from which a turtle issues. Her mantle is lined with swans-down, and is of thin floating material.",
    "Sweetness, poetry, gentleness and kindness. Imaginative, dreamy, at times indolent, yet courageous if roused.\nWhen ill dignified she is selfish and luxurious.\nShe rules a quadrant of the heavens around Kether.\nEarth of Water\nPrincess and Empress of the Nymphs or Undines\nThrone of the Ace of Cups.")),
  KNIGHT_OF_CUPS: Object.freeze(new Card('/images/KnightOfCups.png', Suits.CUPS, Ranks.KNIGHT, 11, 9,  'The Knight Of Cups',
    "The Lord of the Waves and the Waters: the King of the Hosts of the Sea",
    "A Beautiful, winged, youthful Warrior with flying hair, riding upon a white horse, which latter is not winged. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, is a peacock with opened wings. He holds a cup in his hand, bearing the sigil of the scale. Beneath his horse's feet is the sea. From the cup issues a crab.",
    "Graceful, poetic, Venusian, indolent, but enthusiastic if roused.\nIll dignified, he is sensual, idle and untruthful.\nHe rules the heavens from above 20 Degree of Aquarius to 20 Degree of Pisces, thus including the greater part of Pegasus.\nFire of Water\nKing of Undines and Nymphs")),
  QEEEN_OF_CUPS:  Object.freeze(new Card('/images/QeeenOfCups.png',  Suits.CUPS, Ranks.QEEEN,  12, 10, 'The Qeeen Of Cups',
    "The Queen of the Thrones of the Waters",
    "A Very beautiful fair woman like a crowned Queen, seated upon a throne, beneath which is flowing water wherein Lotuses are seen. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. Upon her crown, cuirass and buskins is seen an Ibis with opened wings, and beside her is the same bird, whereon her hand rests. She holds a cup, wherefrom a crayfish issues. Her face is dreamy. She holds a lotus in the hand upon the Ibis.",
    "She is imaginative, poetic, kind, yet not willing to take much trouble for another. Coquettish, good-natured and underneath a dreamy appearance. Imagination stronger than feeling. Very much affected by other influences, and therefore more dependent upon dignity than most symbols.\nShe rules from 20 Degree Gemini to 20 Degree Cancer.\nWater of Water\nQueen of Nymphs or Undines.")),
  KING_OF_CUPS:   Object.freeze(new Card('/images/KingOfCups.png',   Suits.CUPS, Ranks.KING,   13, 11, 'The King Of Cups',
    "The Prince of the Chariot of the Waters",
    "A Winged Kingly Figure with winged crown seated in a chariot drawn by an eagle. On the wheel is the symbol of a scorpion. The eagle is borne as a crest on his crown, cuirass and buskins. General attire like King of Wands. Beneath his chariot is the calm and stagnant water of a lake. His armour resembles feathers more than scales. He holds in one hand a lotus, and in the other a cup, charged with the sigil of his scale. A serpent issues from the cup, and has its head tending down to the waters of the lake. He is subtle, violent, crafty and artistic; a fierce nature with calm exterior. Powerful for good or evil but more attracted by the evil if allied with apparent Power or Wisdom.",
    "If ill dignified, he is intensely evil and merciless.\nHe rules from 20 Degree Libra to 20 Degree Scorpio.\nAir of Water\nPrince and Emperor of Nymphs or Undines")),

  ACE_OF_SWORDS:    Object.freeze(new Card('/images/AceOfSwords.png',    Suits.SWORDS, Ranks.ACE,    0,  3,  'The Ace Of Swords',
    "The Root of the Powers of Air",
    "A White Radiating Angelic Hand, issuing from clouds, and grasping the hilt of a sword, which supports a White Radiant Celestial Crown; from which depend, on the right, the olive branch of Peace; and on the left, the palm branch of suffering. Six Vaus fall from its point.",
    'It symbolizes "Invoked," as contrasted with Natural Force: for it is the Invocation of the Sword. Raised upward, it invokes the Divine crown of Spiritual Brightness, but reversed it is the Invocation of Demonic Force; and becomes a fearfully evil symbol. It represents, therefore, very great power for good or evil, but invoked; and it also represents whirling Force, and strength through trouble. It is the affirmation of Justice upholding Divine Authority; and it may become the Sword of Wrath, Punishment, and Affliction.')),
  TWO_OF_SWORDS:    Object.freeze(new Card('/images/TwoOfSwords.png',    Suits.SWORDS, Ranks.TWO,    1,  27, 'The Two Of Swords',
    "The Lord of Peace Restored", "", "")),
  THREE_OF_SWORDS:  Object.freeze(new Card('/images/ThreeOfSwords.png',  Suits.SWORDS, Ranks.THREE,  2,  28, 'The Three Of Swords',
    "The Lord of Sorrow", "", "")),
  FOUR_OF_SWORDS:   Object.freeze(new Card('/images/FourOfSwords.png',   Suits.SWORDS, Ranks.FOUR,   3,  29, 'The Four Of Swords',
    "The Lord of Rest from Strife", "", "")),
  FIVE_OF_SWORDS:   Object.freeze(new Card('/images/FiveOfSwords.png',   Suits.SWORDS, Ranks.FIVE,   4,  39, 'The Five Of Swords',
    "The Lord of Defeat", "", "")),
  SIX_OF_SWORDS:    Object.freeze(new Card('/images/SixOfSwords.png',    Suits.SWORDS, Ranks.SIX,    5,  40, 'The Six Of Swords',
    "The Lord of Earned Success", "", "")),
  SEVEN_OF_SWORDS:  Object.freeze(new Card('/images/SevenOfSwords.png',  Suits.SWORDS, Ranks.SEVEN,  6,  41, 'The Seven Of Swords',
    "The Lord of Unstable Effort", "", "")),
  EIGHT_OF_SWORDS:  Object.freeze(new Card('/images/EightOfSwords.png',  Suits.SWORDS, Ranks.EIGHT,  7,  51, 'The Eight Of Swords',
    "The Lord of Shortened Force", "", "")),
  NINE_OF_SWORDS:   Object.freeze(new Card('/images/NineOfSwords.png',   Suits.SWORDS, Ranks.NINE,   8,  52, 'The Nine Of Swords',
    "The Lord of Despair and Cruelty", "", "")),
  TEN_OF_SWORDS:    Object.freeze(new Card('/images/TenOfSwords.png',    Suits.SWORDS, Ranks.TEN,    9,  53, 'The Ten Of Swords',
    "The Lord of Ruin", "", "")),
  PAGE_OF_SWORDS:   Object.freeze(new Card('/images/PageOfSwords.png',   Suits.SWORDS, Ranks.PAGE,   10, 16, 'The Page Of Swords',
    "The Princess of the Rushing Winds: the Lotus of the Palace of Air",
    "An Amazon figure with waving hair, slighter than the Rose of the Palace of Fire. Attired like an Amazon. Her shoulders, arms, bosom and knees are bare. She wears a short kilt reaching to the knee. Round her waist is a broad belt of scale-mail; narrow at the sides; broader in front and back. The Feet seem springy, giving the idea of swiftness. Weight changing from one foot to another and body swinging around. She is a mixture of Minerva and Diana: her mantle resembles the AEgis of Minerva. She wears as a crest the head of the Medusa with serpent hair. She holds a sword in one hand; and the other rests upon a small silver altar with grey smoke (no fire) ascending from it. Beneath her feet are white clouds.",
    "Wisdom, strength, acuteness; subtlety in material things: grace and dexterity.\nIf ill dignified, she is frivolous and cunning.\nShe rules a quadrant of the heavens around Kether.\nEarth of Air\nPrincess and Empress of the Sylphs and Sylphides.\nThrone of the Ace of Wands.")),
  KNIGHT_OF_SWORDS: Object.freeze(new Card('/images/KnightOfSwords.png', Suits.SWORDS, Ranks.KNIGHT, 11, 13, 'The Knight Of Swords',
    "The Lord of the Wind and the Breezes: the King of the Spirits of Air",
    "A Winged Warrior with crowned Winged Helmet, mounted upon a brown steed. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears as a crest a winged six-pointed star, similar to those represented on the heads of Castor and Pollux the Dioscuri, the twins Gemini (a part of which constellation is included in his rule). He holds a drawn sword with the sigil of his scale upon its pommel. Beneath his horse's feet are dark-driving stratus clouds.",
    "He is active, clever, subtle, fierce, delicate, courageous, skilful, but inclined to domineer. Also to overvalue small things, unless well dignified.\nIf ill dignified, deceitful, tyrannical and crafty.\nRules from 20 Degree Taurus to 20 Degree Gemini.\nFire of Air\nKing of the Sylphs and Sylphides.")),
  QEEEN_OF_SWORDS:  Object.freeze(new Card('/images/QeeenOfSwords.png',  Suits.SWORDS, Ranks.QEEEN,  12, 14, 'The Qeeen Of Swords',
    "The Queen of the Thrones of Air",
    "A Graceful woman with wavy, curling hair, like a Queen seated upon a Throne and crowned. Beneath the Throne are grey cumulus clouds. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. She wears as a crest a winged child's head. A drawn sword in one hand, and in the other a large, bearded, newly severed head of a man.",
    "Intensely perceptive, keen observation, subtle, quick and confident: often persevering, accurate in superficial things, graceful, fond of dancing and balancing.\nIf ill dignified, cruel, sly, deceitful, unreliable, though with a good exterior.\nRules from 20 Degree Virgo to 20 Degree Libra.\nWater of Air\nQueen of the Sylphs and Sylphides.")),
  KING_OF_SWORDS:   Object.freeze(new Card('/images/KingOfSwords.png',   Suits.SWORDS, Ranks.KING,   13, 15, 'The King Of Swords',
    "The Prince of the Chariot of the Winds",
    "A Winged King with Winged Crown, seated in a chariot drawn by Arch Fays, represented as winged youths very slightly dressed, with butterfly wings: heads encircled by a fillet with a pentagram thereon: and holding wands surmounted by pentagrams, the same butterfly wings on their feet and fillets. He has large white wings. One wheel of his chariot is shewn. He wears corslet and buskins of scale armour. He bears as a crest a winged angelic head with a pentagram on the brows. Beneath the chariot are grey nimbus clouds. His hair long and waving in serpentine whirls, and whorl figures compose the scales of his armour. A drawn sword in one hand; a sickle in the other. With the sword he rules, with the sickle he slays.",
    "Full of ideas and thoughts and designs, distrustful, suspicious, firm in friendship and enmity; careful, observant, slow, over-cautious, symbolizes GR:Alpha and GR:Omega; he slays as fast as he creates.\nIf ill dignified: harsh, malicious, plotting; obstinate, yet hesitating; unreliable.\nRules from 20 Degree Capricorn to 20 Degree Aquarius.\nAir of Air\nPrince and Emperor of the Sylphs and Sylphides.")),

  ACE_OF_PENTACLES:    Object.freeze(new Card('/images/AceOfPentacles.png',    Suits.PENTACLES, Ranks.ACE,    0,  4,  'The Ace Of Pentacles',
    'The Root of the Powers of Earth',
    "A White Radiant Angelic Hand, holding a branch of a Rose Tree, whereon is a large Pentacle, formed of Five concentric circles. The Innermost Circle is white, charged with a red Greek Cross. From this White Centre, Twelve Rays, also white, issue: these terminate at the circumference, making the whole something like an Astrological figure of the Heavens.\nIt is surmounted by a small circle, above which is a large white Maltese Cross, and with two white wings.\nFour Crosses and two buds are shewn. The Hand issueth from the Clouds as in the other three cases.",
    "It represents materiality in all senses, good and evil: and is, therefore, in a sense, illusionary: it shows material gain, labour, power, wealth, etc")),
  TWO_OF_PENTACLES:    Object.freeze(new Card('/images/TwoOfPentacles.png',    Suits.PENTACLES, Ranks.TWO,    1,  36, 'The Two Of Pentacles',
    "The Lord of Harmonious Change", "", "")),
  THREE_OF_PENTACLES:  Object.freeze(new Card('/images/ThreeOfPentacles.png',  Suits.PENTACLES, Ranks.THREE,  2,  37, 'The Three Of Pentacles',
    "The Lord of Material Works", "", "")),
  FOUR_OF_PENTACLES:   Object.freeze(new Card('/images/FourOfPentacles.png',   Suits.PENTACLES, Ranks.FOUR,   3,  38, 'The Four Of Pentacles',
    "The Lord of Earthly Power", "", "")),
  FIVE_OF_PENTACLES:   Object.freeze(new Card('/images/FiveOfPentacles.png',   Suits.PENTACLES, Ranks.FIVE,   4,  48, 'The Five Of Pentacles',
    "The Lord of Material Trouble", "", "")),
  SIX_OF_PENTACLES:    Object.freeze(new Card('/images/SixOfPentacles.png',    Suits.PENTACLES, Ranks.SIX,    5,  49, 'The Six Of Pentacles',
    "The Lord of Material Success", "", "")),
  SEVEN_OF_PENTACLES:  Object.freeze(new Card('/images/SevenOfPentacles.png',  Suits.PENTACLES, Ranks.SEVEN,  6,  50, 'The Seven Of Pentacles',
    "The Lord of Success Unfulfilled", "", "")),
  EIGHT_OF_PENTACLES:  Object.freeze(new Card('/images/EightOfPentacles.png',  Suits.PENTACLES, Ranks.EIGHT,  7,  24, 'The Eight Of Pentacles',
    "The Lord of Prudence", "", "")),
  NINE_OF_PENTACLES:   Object.freeze(new Card('/images/NineOfPentacles.png',   Suits.PENTACLES, Ranks.NINE,   8,  25, 'The Nine Of Pentacles',
    "The Lord of Material Gain", "", "")),
  TEN_OF_PENTACLES:    Object.freeze(new Card('/images/TenOfPentacles.png',    Suits.PENTACLES, Ranks.TEN,    9,  26, 'The Ten Of Pentacles',
    "The Lord of Wealth", "", "")),
  PAGE_OF_PENTACLES:   Object.freeze(new Card('/images/PageOfPentacles.png',   Suits.PENTACLES, Ranks.PAGE,   10, 20, 'The Page Of Pentacles',
    "The Princess of the Echoing Hills: the Rose of the Palace of Earth",
    "A STRONG and beautiful Amazon figure with rich brown hair, standing on grass or flowers. A grove of trees near her. Her form suggests Hebe, Ceres, and Proserpine. She bears a winged ram's head as a crest: and wears a mantle of sheepskin. In one hand she carries a sceptre with a circular disk: in the other a Pentacle similar to that of the Ace of Pentacles.",
    "She is generous, kind, diligent, benevolent, careful, courageous, persevering, pitiful.\nIf ill dignified she is wasteful and prodigal. She rules over one quadrant of the heavens around the North Pole of the Ecliptic.\nEarth of Earth\nPrincess and Empress of the Gnomes.\nThrone of the Ace of Pentacles.")),
  KNIGHT_OF_PENTACLES: Object.freeze(new Card('/images/KnightOfPentacles.png', Suits.PENTACLES, Ranks.KNIGHT, 11, 17, 'The Knight Of Pentacles',
    "The Lord of the Wide and Fertile Land: the King of the Spirits of Earth",
    "A Dark Winged Warrior with winged and crowned helmet: mounted on a light brown horse. The rider wears a winged helmet (like the old Scandinavian and Gaulish helmet) with a Rayed Crown, a corslet of scale-mail and buskins of the same, and a flowing scarlet mantle. Above his helmet, upon his curass, and on the shoulder-pieces and buskins, he wears the winged head of a stag or antelope as a crest. Beneath the horse's feet is fertile land with ripened corn. In one hand he bears a sceptre surmounted by a hexagram: in the other a Pentacle like that of the Zelator Adeptus Minor.",
    "Unless very well dignified he is heavy, dull, and material. Laborious, clever, and patient in material matters.\nIf ill dignified, he is avaricious, grasping, dull, jealous; not very courageous, unless assisted by other symbols.\nRules from above 20 Degree of Leo to 20 Degree of Virgo.\nFire of Earth\nKing of Gnomes.")),
  QEEEN_OF_PENTACLES:  Object.freeze(new Card('/images/QeeenOfPentacles.png',  Suits.PENTACLES, Ranks.QEEEN,  12, 18, 'The Qeeen Of Pentacles',
    "The Queen of the Thrones of Earth",
    "A Woman of beautiful face with dark hair; seated upon a throne, beneath which is dark sandy earth. One side of her face is light, the other dark; and her symbolism is best represented in profile. She wears a corslet and buskins of scale-mail, which latter her robe discloses. Her arms are almost bare. She bears a winged goat's head as a crest. A goat is by her side. In one hand she bears a sceptre surmounted by a cube, and in the other an orb of gold.",
    "She is impetuous, kind; timid, rather charming; great-hearted; intelligent, melancholy; truthful, yet of many moods.\nIf ill dignified she is undecided, capricious, changeable, foolish.\nShe rules from 20 Degree Sagittarius to 20 Degree Capricorn.\nWater of Earth\nThe Queen of Gnomes.")),
  KING_OF_PENTACLES:   Object.freeze(new Card('/images/KingOfPentacles.png',   Suits.PENTACLES, Ranks.KING,   13, 19, 'The King Of Pentacles',
    "The Prince of the Chariot of Earth",
    "A Winged Kingly Figure seated in a chariot drawn by a bull. He bears as a crest the symbol of the head of the winged bull. Beneath the chariot is land, with many flowers. In the one hand he bears an orb of gold held downwards, and in the other a sceptre surmounted by an orb and cross.",
    "Increase of matter. Increases good or evil, solidifies; practically applies things. Steady; reliable.\nIf ill dignified he is selfish, animal and material: stupid. In either case slow to anger, but furious if roused.\nRules from 20 Degree Aries to 20 Degree Taurus.\nAir of Earth\nPrince and Emperor of the Gnomes.")),
});

export class Deck extends EventTarget {
  constructor(cards) {
    super();

    this.cards = cards;
    this.key = Symbol();

    this.undrawn = cards.slice();
    shuffle();
  }

  #emitChangeEvent() {
    this.dispatchEvent(new CustomEvent("deckChange", { detail: this.undrawn }));
  }

  drawCard() {
    const next = this.undrawn.shift();
    this.#emitChangeEvent();
    return next;
  }

  shuffle() {
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    for (let i = this.undrawn.length - 1; i >= 0; ---i) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.undrawn[i], this.undrawn[j]] = [this.undrawn[j], this.undrawn[i]];
    }
    this.#emitChangeEvent();
  }

  reset() {
    this.undrawn = this.cards.slice();
    this.shuffle()
  }

  cut(point = Math.floor(Math.random() * this.undrawn.length)) {
    this.undrawn = [...this.undrawn.slice(point), ...this.undrawn.slice(0, point)]
    this.#emitChangeEvent();
  }
}

export class Spread {
  constructor(name, deck) {
    this.name = name;
    this.key = Symbol(name);

  }
}

export const Spreads = Object.freeze({
  :    Object.freeze(new Spread('')),
});
