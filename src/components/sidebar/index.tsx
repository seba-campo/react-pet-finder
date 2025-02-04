import React, { ComponentProps } from "react";
import * as css from "./styles.css"
import { Hamburger } from "../../ui/buttons";

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
    const toggled = disabled ? css.on : css.off;

    return (
        <div className={`${css.root} ${toggled}`}>
            <div className={css.menuOptionDiv}>
                <p className={css.menuOption}>Mis Datos</p>
            </div>
            <div className={css.menuOptionDiv}>
                <p className={css.menuOption}>Mis Mascotas Reportadas</p>
            </div>
            <div className={css.menuOptionDiv}>
                <p className={css.menuOption}>Reportar Mascota</p>
            </div>
            <div className={css.userDataDiv}>
                <UserData/>
            </div>
        </div>
    )
}