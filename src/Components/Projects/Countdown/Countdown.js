import React from "react";
import './countdown.css'




const Countdown = () =>{

    
    
    return (
        <div>
            <div className="timer">
                <span class="timer__part timer__part--minutes">00</span>
                <span class="timer__part">:</span>
                <span class="timer__part timer__part--seconds">00</span>
                <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                    <span class="material-icons">play</span>
                </button>
                <button type="button" class="timer__btn timer__btn--reset">
                    <span class="material-icons">timer</span>
                </button>
            </div>
        </div>
    );
}

export default Countdown