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
  const cardWidth = cardHeight / 2;
  return {
    width: cardWidth,
    height: cardHeight,
    padX: cardWidth / 2,
    padY: cardHeight / 2,
  };
};

export const renderCard = (canvas, image, position, hover = false) => {
  const context = canvas.getContext('2d');
  const {x, y, width, height, rotation} = position.components();
  //console.log(`renderCard ${x} ${y} ${width} ${height} ${rotation}`)  
  const storedTransform = context.getTransform();
  context.translate(x, y);
  context.rotate(rotation);
  context.drawImage(image, -width / 2, -height / 2, width, height);
  context.setTransform(storedTransform);
};

export const clearCanvas = (canvas) => {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
};

/**
 * Renders a rounded rectangle with gold color on a canvas
 * @param {HTMLCanvasElement} canvas - The canvas element to draw on
 * @param {number} x - The x-coordinate of the top-left corner
 * @param {number} y - The y-coordinate of the top-left corner
 * @param {number} width - The width of the rectangle
 * @param {number} height - The height of the rectangle
 * @param {number} radius - The radius of the rounded corners
 */
export const renderDetail = (canvas, x, y, width, height, radius) => {
  const context = canvas.getContext('2d');
  
  context.beginPath();
  
  context.moveTo(x + width - radius, y);
  context.arcTo(x + width, y, x + width, y + radius, radius);
  context.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  context.arcTo(x, y + height, x, y + height - radius, radius);
  context.arcTo(x, y, x + radius, y, radius);
  
  context.closePath();

  const gradient = context.createLinearGradient(x, y, x, y + height);
  gradient.addColorStop(0, '#FEF1A2');
  gradient.addColorStop(0.35, '#D5BE73');
  gradient.addColorStop(0.5, '#BEA55D');
  gradient.addColorStop(0.65, '#E9D294');
  gradient.addColorStop(1, '#A68E46');
  
  context.fillStyle = gradient;
  context.fill();
  
  const highlightGradient = context.createLinearGradient(
    x + width * 0.3, y + height * 0.2,
    x + width * 0.7, y + height * 0.3
  );
  highlightGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  highlightGradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
  highlightGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  
  context.save();
  context.clip();
  context.fillStyle = highlightGradient;
  context.fillRect(x, y, width, height);
  context.restore();
};