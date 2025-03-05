import { API } from "../../services/mainAPI/mainApi.urls";

type UserData = {
    nombre?: string;
    email?: string;
    location?: {lat: number, lng: number};
}

export async function updateUser(id: any, newData: UserData){
    return await fetch(`${API.API_URL}/user/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData),
    })
}

