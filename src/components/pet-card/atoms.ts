import { atom } from "recoil";

export const reportFormState = atom({
    key: 'reportFormStateAtom',
    default: {
        id: 0,
        nombre: "",
        userId: 0
    }
});