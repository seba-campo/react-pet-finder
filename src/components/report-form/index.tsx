import React from "react";
import * as css from "./style.css";
import { PrimaryButton } from "../../ui/buttons";

export function ReportForm(){
    return (
        <div className={css.root}>
            <div className={css.form}>
                <h1>Report Form</h1>
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