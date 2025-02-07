import React from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";
import { PrimaryButton } from "../../ui/buttons";

export function Auth(){
    function handleSubmit(){
        console.log("Test")
    }
    return (
        <div className={css.root}>
            <div className={css.imageDiv}>
                <ImageSvg file="register-logo.svg"/>
            </div>

            <form onSubmit={handleSubmit} className={css.form}>
                <div className={css.inputDiv}>
                    <label htmlFor="email">
                        EMAIL
                    </label>
                    <input className={css.inputDiv} type="text" name="email"/>
                </div>
                <div className={css.inputDiv}>
                    <label htmlFor="password">
                        CONTRASEÑA
                    </label>
                    <input className={css.inputDiv} type="password" name="password"/>
                </div>
                <div className={css.buttonDiv}>
                    <PrimaryButton
                        onClickHandle={handleSubmit}
                    >
                        Acceder
                    </PrimaryButton>

                </div>
            </form>

            <div>
                <p>Registrarse</p>
            </div>
        </div>
    )
}