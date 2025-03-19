import React from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";
import { PrimaryButton } from "../../ui/buttons";
import { NavLink } from "react-router"

export function Home(){
    // function handleNav(path: string){
    //     nav(`/${path}`)
    // }
        
    return (
        <div className={css.root}>
            <div className={css.heroDiv}>
                <ImageSvg file="hero-draw.svg"/>
            </div>
            
            <div className={css.titleDiv}>
                <p className={css.title}>Pet Finder App</p>
            </div>

            <div className={css.subtitleDiv}>
                <p className={css.subtitle}>Encontrá y reportá mascotas perdidas cerca de tu ubicación</p>
            </div>

            <div className={css.buttonsDiv}>
                <PrimaryButton 
                    color="blue"
                    redirect={true}
                    path="/mascotas"
                >
                    Dar mi ubicación actual
                </PrimaryButton>

                <PrimaryButton
                    color="green"
                    onClickHandle={()=>{console.log("No redirect")}}
                >
                    ¿Cómo funciona Pet Finder?
                </PrimaryButton>
            </div>
        </div>
    )
}