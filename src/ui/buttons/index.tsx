import React, { useState } from "react";
import * as css from "./style.css"

export function Hamburger(){
    const [state, setState] = useState(true);
    var buttonBkg = state ? css.off : css.on;

    function handleClick(){
        if(state){
            setState(false)
        }
        if(!state){
            setState(true)
        }
    }

    return (
    <div>
        <button className={`${css.button} ${buttonBkg}`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="var(--base-white)">
                <path d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </button>
    </div>
    )
}