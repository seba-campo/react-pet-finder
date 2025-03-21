import React from "react";
import { useUserPosition } from "./hookss";
import { Card } from "../../components/pet-card";
import { Suspense } from "react";
import { Loading } from "../../components/fallback-loading";
import { ReportForm } from "../../components/report-form";
import { useRecoilState } from "recoil";
import {reportFormState} from "../../components/pet-card/atoms"
import * as css from "./style.css"

export function Mascotas(){
    const [reportState, setReportState] = useRecoilState(reportFormState);
    const pets = useUserPosition();
    let reportCss = css.off;
    function handleToggle(){
        if(reportState){
            setReportState(false);
            reportCss = css.off;
        }else{
            setReportState(true);
            reportCss = css.on;
        }
    }
 
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
            <div className={reportCss}>
                <ReportForm />   
            </div>
         </div>
    )
}