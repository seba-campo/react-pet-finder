import React, { useState } from "react";
import { Hamburger } from "../../ui/buttons";
import * as css from "./style.css"; 
import { SidebarMenu } from "../sidebar";
const brandLogo = require("../../lib/brand-logo.svg");

export function Layout(){
    const [menuState, setMenuState] = useState(false)


    function handleClickLogo(){
        console.log("click home")
    }

    function handleHamburgerClick(){
        if(menuState){
            setMenuState(false)
        }
        if(!menuState){
            setMenuState(true)
        }
    }

    return (
        <div>
            <div className={css.navbar}>
                <div className={css.brand} onClick={handleClickLogo} dangerouslySetInnerHTML={{ __html: brandLogo }} />
                <div onClick={handleHamburgerClick}>
                    <Hamburger/>
                </div>
                {/* Aca hay que ver si el div del sidebar se puede ocultar mientras esté off, ocupa un espacio innecesario */}
                <div>
                    <SidebarMenu disabled={menuState}/>
                </div>
            </div>
        </div>
    )
}