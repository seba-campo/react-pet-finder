import React, { useState } from "react";
import { Hamburger } from "../../ui/buttons";
import { SidebarMenu } from "../sidebar";
import {Outlet} from "react-router";
import { ImageSvg } from "../../ui/image-svg";
import { NavLink } from "react-router";

import * as css from "./style.css"; 

export function Layout(){
    const [menuState, setMenuState] = useState(true)

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
                <nav>
                    <NavLink to="/">
                        <div className={css.brand}>
                            <ImageSvg file="brand-logo.svg"/>
                        </div>
                    </NavLink>
                </nav>
                
                <div onClick={handleHamburgerClick}>
                    <Hamburger/>
                </div>
                <div className={css.sidebar}>
                    <SidebarMenu disabled={menuState}/>
                </div>
            </div>

            <main className={css.outlet}>
                <Outlet/>
            </main>
        </div>
    )
}