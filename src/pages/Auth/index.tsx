import React from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";
import { PrimaryButton } from "../../ui/buttons";
import { API } from "../../services/mainAPI/mainApi.urls";
import { authState, userCredentials } from "./authState";
import { useRecoilState } from "recoil";
import {useNavigate} from "react-router-dom"

export function Auth(){
    const [auth, setAuth] = useRecoilState(authState);
    const [userCreds, setUserCreds] = useRecoilState(userCredentials);
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        setUserCreds({
            email:dataObject.email as string,
            password: dataObject.password as string
        })
        
        const response = await fetch(`${API.API_URL}/auth`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(
                        { 
                            email: dataObject.email,
                            password: dataObject.password 
                        }
                    ),
        });
        if(response.status === 200){
            setAuth(true)
            console.log("Logueado")
            navigate("/profileData")
        }
        else{
            console.error("Error de autenticación")
        }
    }


    if(auth){
        navigate("/profileData")
        return (<p>Logged</p>)
    }
    else{
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
                            type="submit"
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

    
}