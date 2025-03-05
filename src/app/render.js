import memoize from 'memoizee'

export class Position {
  constructor(x, y, width, height, rotation, ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = rotation;
  }

  components() {
    return ({
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      rotation: this.rotation,
    });
  }
}

export const AspectRatio = Object.freeze({
  TAROT: 3.0/5,
});

export const Rotations = Object.freeze({
  UPRIGHT: 0,
  RIGHT: Math.PI/2,
  LEFT: -Math.PI/2,
  REVERSED: Math.PI,
});

export const loadImage = memoize((imageSrc) =>
  new Promise((resolve, reject) => {
    //console.log('loadImage')
    const image = new Image();

    image.onload = () => {
    //console.log(`loadImage:onload ${imageSrc}`)
      image.onload = null;
      resolve(image);
    };
    image.src = imageSrc;
  }));

export const getCardSize = (width, height) => {
  const cardHeight = Math.min(height * 0.3, width * 0.15);
  const cardWidth = cardHeight * AspectRatio.TAROT;
  return {
    width: cardWidth,
    height: cardHeight,
    padX: cardWidth / 2,
    padY: cardHeight / 2,
  };
};
