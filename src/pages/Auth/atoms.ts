import { atom} from "recoil";

export const authState = atom({
    key: 'userAuthState',
    default: false
});

export const userCredentials = atom({
    key: 'userCredentials',
    default: {
        email: "",
        password: ""
    }
});

export const userData = atom({
    key: 'userData',
    default: {
        id: 0,
        nombre: "",
        email: "",
        location: {lat: 0, lng: 0}
    }
})