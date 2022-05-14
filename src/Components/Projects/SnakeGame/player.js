import classes from './player.module.css';
import { useState } from 'react';

export const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += 1;
    snakeBody[0].y += 0;
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div', {className: 'snake'});
        snakeElement.style.gridRowStart = segment.x;
        snakeElement.style.gridColumnStart = segment.y;
        //snakeElement.className.add(classes.snake);
        //console.log(gameBoard.appendChild(snakeElement));
        //gameBoard.appendChild(snakeElement);

    })
}

const Player = () =>{

    

return(
    <div></div>
)
}