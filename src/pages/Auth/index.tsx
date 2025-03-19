import React, { useEffect } from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";
import { PrimaryButton } from "../../ui/buttons";
import { loginUser } from "./login";
import { getUserData } from "./userData";
import { authState, userCredentials, userData } from "./atoms";
import { useRecoilState } from "recoil";
import {useNavigate} from "react-router-dom"
// Hola
export function Auth(){
    const [auth, setAuth] = useRecoilState(authState);
    const [userCreds, setUserCreds] = useRecoilState(userCredentials);
    const [user, setUser] = useRecoilState(userData)
    const navigate = useNavigate();

    interface LoginFormData {
        email: string;
        password: string;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const entries = Object.fromEntries(formData.entries());
        const dataObject: LoginFormData = {
            email: entries.email as string,
            password: entries.password as string
        };
        
        try {
            setUserCreds(dataObject);
            
            const loginStatus = await loginUser(dataObject);
            
            if (loginStatus === 200) {
                const userData = await getUserData(dataObject.email);
                setUser(userData);
                setAuth(true);
                navigate("/profileData");
            } else {
                throw new Error("Authentication failed");
            }
        } catch (error) {
            console.error("Error de autenticación:", error);
            // You might want to show an error message to the user here
        }
    }

    function handleLink(){
        navigate("/register");
    }

    // Si estas logueado, te lleva a la info del perfil.
    useEffect(()=>{
        if(auth){
            navigate("/profileData")
        }
    }, [auth])

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

            <div onClick={handleLink}>
                <p>Registrarse</p>
            </div>
        </div>
    )


    
}