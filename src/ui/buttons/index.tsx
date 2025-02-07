import React, { Children, useState } from "react";
import { ImageSvg } from "../image-svg";
import {NavLink} from "react-router"
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
            <ImageSvg file="hamburger.svg"/>
        </button>
    </div>
    )
}

type PrimaryButtonType = {
    color?: string,
    onClickHandle?: () => void,
    redirect?: boolean,
    path?: any,
    children: React.ReactNode
}

export function PrimaryButton({color, onClickHandle, redirect, children, path}: PrimaryButtonType){
    var background = undefined;

    switch (color){
        case "blue":
            background = css.blueBtn
            break;
        case "green":
            background = css.greenBtn
            break;
        case "red":
            background = css.redBtn
            break;
        case "black":
            background = css.blackBtn
            break;
        case undefined:
            background = css.blueBtn;
            break;
    }

    if(redirect){
        return (
            <nav>
                <NavLink to={path}>
                    <div 
                    className={`${css.primary} ${background}`}
                    onClick={onClickHandle}
                    >
                        <p>{children}</p>
                    </div>
                </NavLink>
            </nav>
        )
    }
    else{
        return (
            <div 
            className={`${css.primary} ${background}`}
            onClick={onClickHandle}   
            >
                    <p>{children}</p>
            </div>
        )
    }

}