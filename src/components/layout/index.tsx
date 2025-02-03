import React from "react";
import { Hamburger } from "../../ui/buttons";
import * as css from "./style.css"
const brandLogo = require("../../lib/brand-logo.svg");

export function Layout(){

    function handleClickLogo(){
        
    }

    return (
        <div>
            <div className={css.navbar}>
                <div className={css.brand} onClick={handleClickLogo} dangerouslySetInnerHTML={{ __html: brandLogo }} />
                <Hamburger/>
            </div>
        </div>
    )
}