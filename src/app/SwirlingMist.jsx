'use client'

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './SwirlingMist.module.css';

class Circle {
  constructor(xPos, yPos, radius, color) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
    this.color = color;
    this.speed = 100 * Math.floor(radius + Math.random() * radius);

    this.incX = 0;
    this.incY = 0;
  }

  setNewPosition(width, height) {
    this.newX = Math.floor(Math.random() * width);
    this.newY = Math.floor(Math.random() * height);

    const diffX = this.xPos - this.newX;
    const diffY = this.yPos - this.newY;

    this.incX = diffX / this.speed;
    this.incY = diffY / this.speed;
  }

  draw(context, width, height) {
    context.beginPath();

    context.arc(this.xPos -= this.incX, this.yPos -= this.incY, this.radius, 0, 2 * Math.PI, true);
    context.closePath();

    context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a})`;
    context.fill();

    // update position for the next draw
    if (Math.round(this.xPos) == Math.round(this.newX)) {
      this.setNewPosition(width, height);
    }
  }
}

const controller = {
  running: false,
  canvas: null,
  circles: [],
};
const update = () => {
  const {running, canvas, circles} = controller;
  if (!running) {
    return;
  }
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);
  circles.forEach(circle => circle.draw(context, canvas.width, canvas.height));

  requestAnimationFrame(update);
};
const run = (canvas, circles) => {
  controller.running = true;
  controller.canvas = canvas;
  controller.circles = circles;
  update();
};
const cancel = () => {
  controller.running = false;
};

const createCircles = (width, height, count) => {
  const circles = [];

  const maxSize = 0.2 * Math.min(width, height);
  const minSize = 0.1 * maxSize;
  for (let i = 0; i < count; ++i) {
    const x = Math.floor(Math.random() * (width + 1));
    const y = Math.floor(Math.random() * (height + 1));
    const radius = Math.floor(Math.random() * maxSize) + minSize;

    const base = 255 - Math.pow(Math.random() * 10, 2);
    const color = {
      r: base,
      g: base,
      b: base,
      a: .05
    };

    const circle = new Circle(x, y, radius, color);
    circle.setNewPosition(width, height);
    circles.push(circle);
  }

  return circles;
}

export const SwirlingMist = ({className}) => {
  const canvasRef = useRef(null);
  const divCls = classNames(styles.frame, className, {});

  const [circles, setCircles] = useState([]);
  const [count, setCount] = useState(1000);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const circles = createCircles(canvas.width, canvas.height, count);
    run(canvas, circles);

    // maybe avoid the mouse

    
  }, [canvasRef, count]);

  return <div className={divCls}>
    <canvas ref={canvasRef} className={styles.canvas}/>
  </div>;
};

export default SwirlingMist;