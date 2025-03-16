import React from "react";
import * as css from "./style.css"

type CardType = {
    id: number,
    nombre: string,
    found: boolean,
    locationName: string,
    imagen: string
}

export function Card({id, nombre, found, locationName, imagen}: CardType){
    
    function handleAlert(){
        console.log("Alertar")
    }
    
    return (
        <div className={css.root}>
            <div className={css.pictureDiv}>
                <img src={imagen} className={css.imagen} alt="" />
            </div>
            <div className={css.dataDiv}>
                <div    >
                    <div className={css.name}>
                        <p>{nombre}</p>
                    </div>
                    <div className={css.location}>
                        <p>{locationName}</p>
                    </div>
                </div>

                <div>
                    <button onClick={handleAlert} className={css.button}>Alertar</button>
                </div>
            </div>
        </div>
    )
}