import React, { useState } from "react";
import * as css from "./style.css"
import { PrimaryButton } from "../../ui/buttons";
import { useUserLocation } from "./hook";
import { registerUser } from "./register";

export function Register(){
    const [UserData, setUserData] = useState({})
    const userPos = useUserLocation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dataObject = Object.fromEntries(formData);

        if (dataObject.password === dataObject.repassword) {
            setUserData({
                nombre: dataObject.nombre,
                email: dataObject.email,
                password: dataObject.password,
                location: {
                    lat: userPos.latitude,
                    lng: userPos.longitude,
                }
            });

            const status = await registerUser({
                nombre: dataObject.nombre as string,
                email: dataObject.email as string,
                password: dataObject.password as string,
                location: {
                    lat: userPos.latitude,
                    lng: userPos.longitude,
                },
            });

            console.log("Status:", status);
        } else {
            console.log("Las contraseñas no coinciden");
        }
    };            
            

    return (
        <div className={css.root}>

            <div className={css.imageDiv}>
                <h1 className={css.hero}>Registrate</h1>
                <p className={css.subHero}>Ingresá los siguientes datos para realizar el registro</p>
            </div>
                

            <form 
                className={css.form}
                onSubmit={handleSubmit}
            >
                <div className={css.inputDiv}>
                    <label htmlFor="nombbre">
                        NOMBRE
                    </label>
                    <input className={css.inputDiv} type="text" name="nombre"/>
                </div>
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
                <div className={css.inputDiv}>
                    <label htmlFor="repassword">
                        REPETIR CONTRASEÑA
                    </label>
                    <input className={css.inputDiv} type="password" name="repassword"/>
                </div>
                <div className={css.buttonDiv}>
                    <PrimaryButton
                        type="submit"
                    >
                        Registrarse
                    </PrimaryButton>
                </div>
                    <PrimaryButton
                        type="button"
                        redirect={true}
                        path={"/login"}
                    >
                        Cancelar
                    </PrimaryButton>
            </form>
        </div>
    )    
}