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
        return {
            x: this.x,
            y: this.y,,
            width: this.width,
            height: this.height,
            rotation: this.rotation,
        };
    }
}


export const loadImage = memoize((imageSrc) =>
    new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
          renderCard(context, image, position);
          image.onload = null;
          resolve(image);
        };
        image.src = imageSrc;
    });

export const renderCard = (context, image, position) => {
    const {x, y, width, height, rotation} = position.components()

    const storedTransform = context.getTransform();
    context.translate(x, y);
    context.rotate(rotation);
    context.drawImage(image, -width / 2, -height / 2, width, height);
    context.setTransform(storedTransform);
};