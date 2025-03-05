import React, { ComponentProps, useEffect, useState } from "react";
import * as css from "./styles.css"
import { Hamburger } from "../../ui/buttons";
import { NavLink } from "react-router"

type SidebarMenuProps = {
    disabled: boolean
}


function UserData(props: any){
    const userMail = props.mail ? props.mail : <p>Ingresar</p>

    return (
        <div className={css.userdata}>
            <div className={css.userDataDiv}>
                <p className={css.userDataText}>
                    {props.mail != null ?  props.mail : "Sesión no iniciada"}
                </p>
            </div>
            <div className={css.userDataDiv}>
                <p className={css.userDataTextClose}>Cerrar sesión</p>
            </div>
        </div>
    )
}

export function SidebarMenu({disabled}: SidebarMenuProps){
    const [state, setState] = useState(disabled);
    const [barStyle, setBarStyle] = useState(css.off);

    useEffect(()=>{
        if(state){
            setState(false)
            setBarStyle(css.off)
        }
        if(!state){
            setState(true)
            setBarStyle(css.on)
        }
    }, [disabled])

    function handleBarStyle(){
        if(state){
            setState(false)
            setBarStyle(css.off)
        }
        if(!state){
            setState(true)
            setBarStyle(css.on)
        }
    }

    return (
        <div className={`${css.root} ${barStyle}`}>
            <nav>
                {/* TODO, validar si está logueado para manejar el link */}
                <NavLink to={"/login"} onClick={handleBarStyle}>
                    <div className={css.menuOptionDiv}>
                        <p className={css.menuOption}>Mis Datos</p>
                    </div>
                </NavLink>
            </nav>
                <NavLink to={"/myReports"} onClick={handleBarStyle}>
                    <div className={css.menuOptionDiv}>
                        <p className={css.menuOption}>Mis Mascotas Reportadas</p>
                   </div>
                </NavLink>
            <div className={css.menuOptionDiv}>
                <p className={css.menuOption}>Reportar Mascota</p>
            </div>
            <div className={css.userDataDiv}>
                <UserData/>
            </div>
        </div>
    )
}