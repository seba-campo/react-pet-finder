import React from "react";
import * as css from "./style.css"
import { useRecoilState, useResetRecoilState } from "recoil";
import { userData, authState } from "../Auth/atoms";
import { PrimaryButton } from "../../ui/buttons";


export function Edit(){
    return (
        <div className={css.root}>

            <div className={css.titleDiv}>
                <p className={css.title}>Editar Reporte</p>
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
                <PrimaryButton
                    color="blue"
                >
                    Guardar
                </PrimaryButton>
                <PrimaryButton
                    color="black"
                    redirect={true}
                    path={"/"}
                    
                >
                    Reportar como encontrado
                </PrimaryButton>
                <PrimaryButton
                    color="red"
                >
                    Eliminar reporte
                </PrimaryButton>

        </form>
          
        </div>
    )
}