import React from "react";
import * as css from "./style.css"
import { useRecoilState, useResetRecoilState } from "recoil";
import { userData, authState } from "../Auth/atoms";
import { PrimaryButton } from "../../ui/buttons";


export function Publish(){
    return (
        <div className={css.root}>

            <div className={css.titleDiv}>
                <p className={css.title}>Reportar mascota perdida</p>
            </div>
            <div className={css.subtitleDiv}>
                <p className={css.subtitle}>Ingresá la siguiente información para realizar el reporte de la mascota</p>
            </div>

        <form action="#">
            <div className={css.inputDiv}>
                <label htmlFor="nombre">
                    NOMBRE
                </label>
                <input className={css.inputDiv} type="text" name="nombre"/>
            </div>

            <div className={css.inputDiv}>
                Foto
            </div>

            <div className={css.inputDiv}>
                <label htmlFor="location">
                    UBICACION
                </label>
                <input className={css.inputDiv} type="text" name="location"/>
            </div>

            <div className={css.buttonDiv}>
                <PrimaryButton
                    color="blue"
                >
                    Publicar
                </PrimaryButton>
            </div>
                <PrimaryButton
                    color="black"
                    redirect={true}
                    path={"/"}
                    
                >
                    Cancelar
                </PrimaryButton>
        </form>
          
        </div>
    )
}