import { useEffect } from "react";
import { atom, useRecoilValue, useRecoilState, useSetRecoilState, selector } from "recoil";
import { API } from "../../services/mainAPI/mainApi.urls";
import { userData } from "../Auth/atoms";

const userPets = selector({
    key: 'userPets',
    get: async ({get})=>{
        
        const response =  pets.status == 200 ? await pets.json() : new Error("Error fetching");
        return response
    }
})

export function useGetPetsOfUser() {
    // const [uPos, setUPos] = useRecoilState(userPosition);
    const petsList = useRecoilValue(userPets);
    return petsList; // Devuelves la posición del usuario (o error si hay)
}