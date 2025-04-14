import { API } from "../../services/mainAPI/mainApi.urls";
import {ReportDataForm} from "./index"

// "from": {
//         "name": "Roberto",
//         "phone": 1133456848
//     },
//     "to": 4,
//     "pet": 4,
//     "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// }

interface messageType{
    from:{
        name: string,
        phone: number
    },
    to: number,
    pet: number,
    message: string
}

export const submitReport = async (data: ReportDataForm) => {

    var payload = {
        from:{
            name: data.nombre,
            phone: parseInt(data.telefono)
        },
        to: data.userId,
        pet: data.petId,
        message: data.message
    }

    const submit = await fetch(`${API.API_URL}/mail`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    return submit.status
}