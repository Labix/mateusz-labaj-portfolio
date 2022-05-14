import React from "react";
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./player";

const Main = () =>{

    let lastRenderTime = 0;
    const gameBoard = document.getElementById('game-board');

    function main(currentTime) {
        window.requestAnimationFrame(main);
        const secondsSinceLastrender = (currentTime - lastRenderTime) / 1000;
        if(secondsSinceLastrender < 1 / SNAKE_SPEED) return;
        lastRenderTime = currentTime;

        update();
        draw();
    }

    window.requestAnimationFrame(main);

    function update(){
        updateSnake();
    }

    function draw(){
        drawSnake(gameBoard);
    }

    return(
        <div className="h-screen w-screen flex justify-center items-center m-0 bg-black">
            <div id='game-board' className="bg-slate-300 w-screen h-screen grid grid-cols-21 grid-rows-21"></div>
        </div>
    )
}

export default Main;