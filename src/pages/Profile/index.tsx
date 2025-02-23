import React from "react";
import * as css from "./style.css"
import { useRecoilState, useResetRecoilState } from "recoil";
import { userData, authState } from "../Auth/atoms";
import { PrimaryButton } from "../../ui/buttons";


export function Profile(){
    const [user, setUser] = useRecoilState(userData);
    const resetUserData = useResetRecoilState(userData);
    const resetLoggedState = useResetRecoilState(authState);

    function handleLogOut(){
        resetLoggedState();
        resetUserData();
    }

    console.log(user)
    return (
        <div className={css.root}>

            <div className={css.titleDiv}>
                <p className={css.title}>Mis datos Personales</p>
            </div>
            

            <form action="#">
                <div className={css.inputDiv}>
                    <label htmlFor="nombre">
                        NOMBRE
                    </label>
                    <input className={css.inputDiv} value={user.nombre} type="text" name="nombre"/>
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor="mail">
                        CORREO
                    </label>
                    <input className={css.inputDiv} value={user.email} type="text" name="mail"/>
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor="location">
                        UBICACION
                    </label>
                    <input className={css.inputDiv} value={user.location ? user.location : ""} type="text" name="location"/>
                </div>

                <div className={css.buttonDiv}>
                    <PrimaryButton>
                        Cambiar datos
                    </PrimaryButton>
                </div>
                    <PrimaryButton
                        type="button"
                        redirect={true}
                        path={"/"}
                        onClickHandle={handleLogOut}
                    >
                        Cerrar sesión
                    </PrimaryButton>
            </form>
        </div>
    )
}