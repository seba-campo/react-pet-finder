import React from "react";
import * as css from "./style.css";
import { PrimaryButton } from "../../ui/buttons";

export function ReportForm(){
    return (
        <div className={css.root}>

            <div className={css.wrapper}>
                <div className={css.heroTitle}>
                    <p>Reportar info de "nombre"</p>
                </div>

                <form action="#" className={css.form}>
                    <div className={css.inputDiv}>
                        <label htmlFor="nombre">
                            NOMBRE
                        </label>
                        <input className={css.inputDiv} type="text" name="nombre"/>
                    </div>

                    <div className={css.inputDiv}>
                        <div className={css.inputDiv}>
                            <label htmlFor="location">
                                TELEFONO
                            </label>
                            <input className={css.inputDiv} type="text" name="telefono"/>
                        </div>
                    </div>

                    <div className={css.inputDiv}>
                        <label htmlFor="location">
                            DONDE LO VISTE?
                        </label>
                            <textarea className={css.inputDiv+` `+css.inputTextArea} name="message"/>
                    </div>

                    <div className={css.buttonDiv}>
                        <PrimaryButton
                            color="green"
                        >
                            Enviar informacion
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
            
        </div>
    )
}