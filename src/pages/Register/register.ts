import { API } from "../../services/mainAPI/mainApi.urls";

export const registerUser = async (data: { nombre: string, email: string, password: string, location: { lat: number, lng: number } }) => {
    const response = await fetch(`${API.API_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.status;
};