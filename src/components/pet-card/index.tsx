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
    
    
    return (
        <div>
            Esta es la card
        </div>
    )
}