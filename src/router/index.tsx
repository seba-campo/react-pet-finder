import  React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Loading } from "../components/fallback-loading";
import { Home } from "../pages/Home";
import { Mascotas } from "../pages/Mascotas"
import { Auth } from "../pages/Auth";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Publish } from "../pages/PublishPet";
import { Edit } from "../pages/EditPet";
import { MisMascotas } from "../pages/MisMascotas";


export function Router(props: any){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/mascotas" element={<Mascotas />} />
                  <Route path="/login" element={<Auth />} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/profileData" element={<Profile/>} />
                  <Route path="/publishPet" element={<Publish/>} />
                  <Route path="/editPet" element={<Edit/>} />
                  <Route path="/myReports" element={<MisMascotas/>}
            </Route>
        </Routes>
      </BrowserRouter>
    );
}