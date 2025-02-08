import React, { useEffect,  useState } from "react";
import { API } from "../../services/mainAPI/mainApi.urls";
import { atom, useRecoilValue, selector, useSetRecoilState, useRecoilState } from "recoil";

export const authState = atom({
    key: 'userAuthState',
    default: false
})

export const userCredentials = atom({
    key: 'userCredentials',
    default: {
        email: "",
        password: ""
    }
})
