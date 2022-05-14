import React, {Component} from "react";
import Snake from "./Snake";
import Food from "./Food";
import './index.css';

const getRandomCoordinates = () =>{
    let min = 1;
    let max = 90;
    let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
    return [x,y];
}

const initialState = {
    food: getRandomCoordinates(),
    direction: 'RIGHT',
    speed: 100,
    snakeDots: [
        [0, 0],
        [2, 0],
        [4, 0]
    ]
}

class Game extends Component {

    state = initialState;

    componentDidMount(){
        setInterval(this.moveSnake, this.state.speed);
        document.onkeydown = this.onkeydown;
        document.Down = this.onkeydown;
    }

    componentDidUpdate(){
        this.checkIfOutOfBorders();
        this.checkIfCollapsed();
        this.checkIfEat();
    }

    onkeydown = (e) =>{
        e = e || window.event;
        switch(e.keyCode){
            case 83:
                if(!['UP','DOWN'].includes(this.state.direction)){
                    this.setState({direction:'UP'});
                }
                break;
            case 88:
                if (!['UP', 'DOWN'].includes(this.state.direction)) {
                    this.setState({ direction: 'DOWN' });
                }
                break;
            case 90:
                if (!['LEFT', 'RIGHT'].includes(this.state.direction)) {
                    this.setState({ direction: 'LEFT' });
                }
                break;
            case 67:
                if (!['LEFT', 'RIGHT'].includes(this.state.direction)) {
                    this.setState({ direction: 'RIGHT' });
                }
                break;
                
        }
        /*if(e.keyCode === 83){
            this.setState({direction:'UP'});
            
        }
        else if(e.keyCode === 88){
            this.setState({direction:'DOWN'});
        }
        else if (e.keyCode === 90) {
            this.setState({ direction: 'LEFT' });
        }
        else if (e.keyCode === 67) {
            this.setState({ direction: 'RIGHT' });
        }*/
    }

    moveSnake = () =>{
        let dots = [...this.state.snakeDots];
        let head = dots[dots.length-1];

        switch(this.state.direction){
            case 'RIGHT':
                head = [head[0] + 2, head[1]];
                break;
            case 'LEFT':
                head = [head[0] - 2, head[1]];
                break;
            case 'DOWN':
                head = [head[0], head[1] + 2];
                break;
            case 'UP':
                head = [head[0], head[1] - 2];
                break;
        }
        dots.push(head);
        dots.shift();
        this.setState({
            snakeDots: dots
        })
    }

    checkIfOutOfBorders(){
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        if(head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] <0){
            this.onGameOver();
        }
    }

    checkIfCollapsed(){
        let snake = [...this.state.snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot=>{
            if(head[0] == dot[0] && head[1] == dot[1]){
                this.onGameOver();
            }
        })
    }

    checkIfEat(){
        let head = this.state.snakeDots[this.state.snakeDots.length - 1];
        let food = this.state.food;
        if(head[0] == food[0] && head[1] == food[1]){
            this.setState({
                food: getRandomCoordinates()
            })
            this.enlargeSnake();
            this.increaseSpeed();
        }
    }

    enlargeSnake() {
        let newSnake = [...this.state.snakeDots];
        newSnake.unshift([])
        this.setState({
            snakeDots: newSnake
        })
    }

    increaseSpeed() {
        if(this.state.speed > 10){
            this.setState({
                speed: this.state.speed - 10
            })
        }
    }

    onGameOver(){
        alert(`Game Over, Snake length is ${this.state.snakeDots.length}`);
        this.setState(initialState);
    }

    Down = (e)=>{
        if (!['UP', 'DOWN'].includes(this.initialState.direction)) {
            this.setState({ direction: 'DOWN' });
        }
    }

    render(){

        return(
            <div className="XD">
            <div className="w-screen md:h-screen h-screen flex flex-col justify-center items-center">
                <div id="game-area" className="bg-green-500 relative m-12 w-80 h-80 md:w-600px md:h-600px border-2 border-solid border-black">
                    <Snake snakeDots={this.state.snakeDots}/>
                    <Food dot={this.state.food}/>
                </div>
                <div className="md:hidden">
                    <div className="">
                            <p className="ml-4"><i className="arrow up"></i></p>
                    
                    <div className="flex flex-row gap-5">
                    <p><i className="arrow left"></i></p>
                                <p className="ml-1"><i className="arrow right"></i></p>
                    </div>
                            <p className="ml-4"><i id='arrow-down' className="arrow down"></i></p>
                    </div>
                </div>    
            </div>
            </div>
        );
    }
}

export default Game;

