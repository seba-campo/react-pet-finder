import React from "react";
import { useUserPosition } from "./hooks";
import { Card } from "../../components/pet-card";
import { Suspense } from "react";
import { Loading } from "../../components/fallback-loading";
import * as css from "./style.css"

export function Mascotas(){
    const pets = useUserPosition();
    

    return (
        <div className={css.root}>   
            <div className={css.heroDiv}>
                <p>Mascotas perdidas cerca</p>
            </div>

            <Suspense fallback={<Loading />}>
                {pets.map((p: any)=>{
                    return <Card 
                        key={Math.random()}
                        id={p.id}
                        nombre={p.nombre}
                        imagen={p.imagen}
                        found={p.found}
                        locationName={p.locationName}
                    />
                })}
            </Suspense>
        </div>
    )
}