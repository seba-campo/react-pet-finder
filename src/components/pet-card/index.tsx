import React from "react";
import { useRecoilState } from "recoil";
import {reportFormState} from "./atoms"
import { useNavigate } from "react-router-dom";
import * as css from "./style.css"

type CardType = {
    id: number,
    nombre: string,
    found: boolean,
    locationName: string,
    imagen: string,
    userId: number
}

export function Card({id, nombre, found, locationName, imagen, userId}: CardType){    
    const navigate = useNavigate();
    const [reportData, setReportData] = useRecoilState(reportFormState);
    function handleReport(){
        setReportData({id: id, nombre: nombre, userId: userId});
        navigate("/reportPet");
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
                    <button className={css.button} onClick={handleReport}>Alertar</button>
                </div>
            </div>
        </div>
    )
}