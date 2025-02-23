import { API } from "../../services/mainAPI/mainApi.urls";

export const loginUser = async (data: {email: string, password: string}) => {
    const response = await fetch(`${API.API_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    return response.status
}