import  React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout/index";
import { Loading } from "../components/fallback-loading/index";
import { Home } from "../pages/Home/index";
import { Mascotas } from "../pages/mascotas/index";
import { Auth } from "../pages/Auth/index";
import { Profile } from "../pages/Profile/index";
import { Register } from "../pages/Register/index";
import { Publish } from "../pages/PublishPet/index";
import { Edit } from "../pages/EditPet/index";
import { MisMascotas } from "../pages/MisMascotas/index";


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
                  <Route path="/myReports" element={<MisMascotas/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}