import React, { useEffect, useState, useReducer } from "react";
import * as css from "./style.css"
import { PrimaryButton } from "../../ui/buttons";
import { reportFormState } from "@/components/pet-card/atoms";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { submitReport } from "./sendReport";

export interface ReportDataForm{
    nombre: string,
    telefono: string,
    message: string,
    petId: number,
    userId: number
}

export function ReportPet(){
    const navigate = useNavigate();
    const reportData = useRecoilValue(reportFormState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const entries = Object.fromEntries(formData.entries());
        const dataObject: ReportDataForm = {
            nombre: entries.nombre as string,
            telefono: entries.telefono as string,
            message: entries.message as string,
            petId: reportData.id as number,
            userId: reportData.userId as number
        };

        console.log(await submitReport(dataObject));
    };
    
    const mockSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setTimeout(()=>{
            alert("Email sent");
        }, 1500)
        
    }

    return (
        <div className={css.root}>

            <div className={css.imageDiv}>
                <h1 className={css.hero}>Donde viste por última vez a </h1>
                <p className={css.subHero}>{reportData.nombre}</p>
            </div>
                

            <form onSubmit={mockSubmit} className={css.form}>
                <div className={css.inputDiv}>
                    <label htmlFor="nombre">
                       TU NOMBRE
                    </label>
                    <input className={css.inputDiv} type="text" name="nombre"/>
                </div>

                <div className={css.inputDiv}>
                    <div className={css.inputDiv}>
                        <label htmlFor="location">
                            TELEFONO
                        </label>
                        <input className={css.inputDiv} type="text" name="telefono"/>
                    </div>
                </div>

                <div className={css.inputDiv}>
                    <label htmlFor="location">
                        DONDE LO VISTE?
                    </label>
                        <textarea className={css.inputDiv+` `+css.inputTextArea} name="message"/>
                </div>

                <div className={css.buttonDiv}>
                    <PrimaryButton
                        color="green"
                        type="submit"
                    >
                        Reportar
                    </PrimaryButton>
                </div>
                    <PrimaryButton
                        color="black"
                        redirect={true}
                        path={"/mascotas"}
                        
                    >
                        Cancelar
                    </PrimaryButton>
            </form>
        </div>
    )    
}