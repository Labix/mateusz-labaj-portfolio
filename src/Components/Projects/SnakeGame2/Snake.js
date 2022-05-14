import React from "react";

export default (props) =>{
    return(
        <div>
            {props.snakeDots.map((dot, i)=>{
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return(
                    <div className="absolute w-2% h-2% bg-black border border-solid border-white z-2" key={i} style={style}></div>
                )
            })}
        </div>
    )
}