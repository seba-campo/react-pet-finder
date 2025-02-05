import React from "react";
import { atom } from "recoil";
import { useUserPosition } from "./hooks";
import { Card } from "../../components/pet-card";
import { Suspense } from "react";
import { Loading } from "../../components/fallback-loading";

export function Mascotas(){
    const pets = useUserPosition();

    console.log(pets)
    
    return (
        <div>   
            <div>
                <p>Mascotas perdidas cerca</p>
            </div>

            <Suspense fallback={<Loading />}>
                {pets.map((p: any)=>{
                    return <Card 
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