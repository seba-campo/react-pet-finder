import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userPosition } from "../mascotas/hookss";

export const useUserLocation = () => {
    const [userPos, setUserPos] = useRecoilState(userPosition);

    useEffect(() => {
        if (userPos.latitude == 0 && userPos.longitude == 0) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setUserPos({
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                        error: null,
                    });
                }
            );
        }
    }, [userPos, setUserPos]);

    return userPos;
};