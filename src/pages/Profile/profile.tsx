import React from "react";
import * as css from "./style.css"
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { userPosition } from "@/pages/Mascotas1/hookss";
import { userData, authState } from "../Auth/atoms";
import { PrimaryButton } from "../../ui/buttons";
import { updateUser } from "./updateUser"


export function Profile(){
    const user = useRecoilValue(userData);
    const resetUserData = useResetRecoilState(userData);
    const resetLoggedState = useResetRecoilState(authState); 
    const setUserPos = useSetRecoilState(userPosition);
    const resetUserPos = useResetRecoilState(userPosition);     


    function handleLogOut(){
        resetLoggedState();
        resetUserData();
    }

    function handleUpdateLocation(user: any){
        console.log(user)
        navigator.geolocation.getCurrentPosition((position) => {
            resetUserPos();
            setUserPos({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null,
            });
            console.log("Aca")
            updateUser(user.id, {location: {lat: position.coords.latitude, lng: position.coords.longitude}})
            .then(()=>{
                alert("Ubicación actualizada");
            })
            .catch(()=>{
                alert("Error al actualizar la ubicación");
            })
        });
        console.log(user)
    }
    

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
                    <input className={css.inputDiv} defaultValue={user.nombre} type="text" name="nombre"/>
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor="mail">
                        CORREO
                    </label>
                    <input className={css.inputDiv} defaultValue={user.email} type="text" name="mail"/>
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor="location">
                        UBICACION
                    </label>
                    <PrimaryButton
                        type="button"
                        onClickHandle={() => handleUpdateLocation(user.id)}
                        color="black"
                        redirect={false}
                    >
                        Cambiar ubicación
                    </PrimaryButton>
                </div>

                <div className={css.buttonDiv}>
                    <PrimaryButton>
                        Cambiar datos
                    </PrimaryButton>
                </div>
                    <PrimaryButton
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