import React from 'react';
import { useEffect } from 'react';

import classes from './Kalendarz.module.css'

const Kalendarz = () =>{

    useEffect(()=>{
        const date = new Date();
        const renderCalendar = () => {
            date.setDate(1);
            const monthDays = document.getElementById("days");
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
            const firstDayIndex = date.getDay();
            const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
            const nextDays = 7 - lastDayIndex - 1
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            document.querySelector("#date h1").innerHTML = months[date.getMonth()];
            document.querySelector("#date p").innerHTML = new Date().toDateString();
            let days = "";
            for (let x = firstDayIndex; x > 0; x--) {
                days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
            }
            for (let i = 1; i <= lastDay; i++) {
                if (
                    i === new Date().getDate() &&
                    date.getMonth() === new Date().getMonth()
                ) {
                    days += `<div class="today">${i}</div>`;
                } else {
                    days += `<div>${i}</div>`;
                }
            }
            for (let j = 1; j <= nextDays; j++) {
                days += `<div class="next-date">${j}</div>`;
                monthDays.innerHTML = days;
            }
        };
        /*document.querySelector("#prev").addEventListener("click", () => {
            date.setMonth(date.getMonth() - 1);
            renderCalendar();
        });
        document.querySelector("#next").addEventListener("click", () => {
            date.setMonth(date.getMonth() + 1);
            renderCalendar();
        });*/
        renderCalendar();
    })
    
    return (

        <div id='container' className={classes.container}>
            <div id='calendar' className={classes.calendar}>
                <div id='month' className={classes.month}>
                    <i className="fa fa-angle-left prev"></i>
                    <div id='date' className={classes.date}>
                        <h1></h1>
                        <p></p>
                    </div>
                    <i className="fa fa-angle-right next"></i>
                </div>
                <div id='weekdays' className={classes.weekdays}>
                    <div id='x'>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div id='days' className={classes.days}></div>
            </div>
        </div>

    );
}

export default Kalendarz;