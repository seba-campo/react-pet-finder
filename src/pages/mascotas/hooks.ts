import { useEffect } from "react";
import { atom, useRecoilValue, useRecoilState, useSetRecoilState, selector } from "recoil";
import { API } from "../../services/mainAPI/mainApi.urls";


const userPosition = atom({
    key: 'userPos',
    default: {}
})

const petsAround = selector({
    key: 'petsAroundLocation',
    get: async ({get})=>{
        const pets = await fetch(`${API.API_URL}/pets`);
        const response =  pets.status == 200 ? await pets.json() : new Error("Error fetching");
        return response
    }
})

export function useUserPosition() {
    // const [uPos, setUPos] = useRecoilState(userPosition);
    const uPos = useRecoilValue(userPosition)
    const setUserPos = useSetRecoilState(userPosition);
    const petsList = useRecoilValue(petsAround);

    useEffect(() => {
        // Solo ejecutamos el código cuando el componente se monta
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                // Actualizamos el estado con las coordenadas
                setUserPos({
                    latitude: pos.coords.latitude,
                    longitude: pos.coords.longitude,
                    error: null,
                })
            },
            (err) => {
                // Manejo de errores
                console.error('Error en geolocalización: ', err);
                setUserPos({
                    latitude: null,
                    longitude: null,
                    error: err.message,
                });
            }
        );
    }, []); // El useEffect solo se ejecutará una vez al montar el componente

    return petsList; // Devuelves la posición del usuario (o error si hay)
}