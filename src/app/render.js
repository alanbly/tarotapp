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
 * Renders a long string of text onto a canvas with proper word wrapping
 * 
 * @param {CanvasRenderingContext2D} context - The canvas 2D context
 * @param {string} text - The text to render
 * @param {Object} options - Rendering options
 * @param {number} options.x - Starting X position
 * @param {number} options.y - Starting Y position
 * @param {number} options.maxWidth - Maximum width of a line before wrapping
 * @param {number} options.lineHeight - Spacing between lines
 * @param {number} options.newlineSpacing - Additional spacing between paragraphs
 */
function renderLongText(context, text, {x, y, maxWidth, lineHeight, newlineSpacing = 0}) {
  // Split the text into words
  const words = text.split(' ');
  let line = '';
  let currentOffset = y;
  
  // Process each word
  for (let i = 0; i < words.length; ++i) {
    const [nextWord, ...rest] = words[i].split("\n");
    const forceNewline = rest.length > 0;

    if (forceNewline) {
      words.splice(i + 1, 0, rest.join("\n"))
    }

    const testLine = line + nextWord + ' ';
    const {width: testWidth} = context.measureText(testLine);
    
    if (testWidth > maxWidth && i > 0) {
      // If adding this word exceeds width, render current line and start a new one
      context.fillText(line, x, currentOffset);
      line = nextWord + ' ';
      currentOffset += lineHeight;
    } else {
      line = testLine;
    }

    if (forceNewline) {
      context.fillText(line, x, currentOffset);
      line ='';
      currentOffset += lineHeight + newlineSpacing;
    }
  }
  
  // Render the last line
  if (line.length > 0) {
    context.fillText(line, x, currentOffset);
  }
}

/**
 * Renders the Card Detail panel
 * @param {HTMLCanvasElement} canvas - The canvas element to draw on
 * @param {Card} card - The card being rendered
 * @param {Object} config - The render config
 */
export const renderDetail = (canvas, card, {x, y, width, height, inset, radius}) => {
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

  const contentHeight = height - inset * 2;
  const textLeftPad = x + contentHeight * AspectRatio.TAROT + inset * 2;
  const textTopPad = y + inset;
  const textMaxWidth = x + width - textLeftPad - inset;
  const titleHeight = height * 0.05;
  const textHeight = height * 0.03;

  context.fillStyle = 'black';
  context.font = `${titleHeight}px cursive`;
  context.fillText(card.name, textLeftPad, textTopPad + titleHeight, textMaxWidth);

  context.font = `${textHeight}px cursive`;
  renderLongText(context, card.interpretation, {
    x: textLeftPad,
    y: textTopPad + titleHeight * 2, 
    maxWidth: textMaxWidth,
    lineHeight: textHeight * 1.1,
    newlineSpacing: textHeight * 0.3,
  })
};