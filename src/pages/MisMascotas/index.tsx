import React from "react";
import { Card } from "../../components/pet-card";
import { Suspense, useEffect, useState } from "react";
import { Loading } from "../../components/fallback-loading";
import * as css from "./style.css"
import { authState } from "../Auth/atoms";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/mainAPI/mainApi.urls";
import { userData } from "../Auth/atoms";

type PetCardInfo = {
    id: number
    nombre: string
    imagen: string
    found: boolean
    locationName: string
}


export function MisMascotas(){
    const isLogged = useRecoilValue(authState);
    const user = useRecoilValue(userData);
    const navigate = useNavigate();
    const [pet, setPet] = useState<PetCardInfo[]>([]);

    useEffect(()=>{
        if(!isLogged){
            navigate("/login");
        } else {
            fetch(`${API.API_URL}/petsByUser/${user.id}`)
                .then((res) => res.json())
                .then((data: PetCardInfo[]) => setPet(data))
                .catch((err) => console.error("Error fetching pets:", err));
        }
    }, [isLogged, user.id, navigate]);

    return (
        <div className={css.root}>   
            <div className={css.heroDiv}>
                <p>Mis Mascotas Reportadas</p>
            </div>

            <Suspense fallback={<Loading />}>
                {pet.map((p) => (
                    <Card 
                        key={p.id} // Usa id en lugar de Math.random() para evitar renders innecesarios
                        id={p.id}
                        nombre={p.nombre}
                        imagen={p.imagen}
                        found={p.found}
                        locationName={p.locationName}
                    />
                ))}
            </Suspense>
        </div>
    )    
}
