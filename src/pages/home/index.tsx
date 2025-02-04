import React from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";

export function Home(){
    return (
        <div>
            <div className={css.heroDiv}>
                <ImageSvg file="hero-draw.svg"/>
            </div>
            Esta es la home!
        </div>
    )
}