import { API } from "../../services/mainAPI/mainApi.urls";


export const getUserData = async (email: string) => {
    const response = await fetch(`${API.API_URL}/user/by?email=${email}`, {
        method: "GET"
    });

    const data = await response.json();

    return data
}