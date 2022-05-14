import React from "react";

export default (props) =>{
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return(
        <div className="absolute w-2% h-2% bg-red-500 border border-white z-1" style={style}></div>
    )
}