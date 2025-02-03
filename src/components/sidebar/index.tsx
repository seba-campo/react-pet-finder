import React, { ComponentProps } from "react";
import * as css from "./styles.css"

type SidebarMenuProps = {
    disabled: boolean
}

function UserData(props: any){
    const userMail = props.mail ? props.mail : <p>Ingresar</p>

    return (
        <div className={css.userdata}>
            <div>
                <p>Aca va el mail {props.mail}</p>
            </div>
            <div>
                <p>Cerrar sesión</p>
            </div>
        </div>
    )
}

export function SidebarMenu({disabled}: SidebarMenuProps){
    const toggled = disabled ? css.on : css.off;

    return (
        <div className={`${css.root} ${toggled}`}>
            <UserData/>
        </div>
    )
}