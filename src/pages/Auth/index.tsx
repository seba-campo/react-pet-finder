import React, { useEffect } from "react";
import * as css from "./style.css"
import { ImageSvg } from "../../ui/image-svg";
import { PrimaryButton } from "../../ui/buttons";
import { loginUser } from "./login";
import { getUserData } from "./userData";
import { authState, userCredentials, userData } from "./atoms";
import { useRecoilState } from "recoil";
import {useNavigate} from "react-router-dom"

export function Auth(){
    const [auth, setAuth] = useRecoilState(authState);
    const [userCreds, setUserCreds] = useRecoilState(userCredentials);
    const [user, setUser] = useRecoilState(userData)
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const dataObject = Object.fromEntries(formData);
        setUserCreds({
            email:dataObject.email as string,
            password: dataObject.password as string
        });
        
        const login = await loginUser({
            email:dataObject.email as string,
            password: dataObject.password as string
        })
        
        if(login == 200){
            setAuth(true)
            const fetchUserData = await getUserData(dataObject.email as string)
            console.log(fetchUserData)
            setUser(fetchUserData)
            console.log("Logueado")
            navigate("/profileData")
        }
        else{
            console.error("Error de autenticación")
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