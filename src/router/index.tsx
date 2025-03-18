import  React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout/index";
import { Loading } from "../components/fallback-loading/index";
import { Home } from "../pages/Home/home";
import { Mascotas } from "../pages/Mascotas/mascotas";
import { Auth } from "../pages/Auth/auth";
import { Profile } from "../pages/Profile/profile";
import { Register } from "../pages/Register/registerComponent";
import { Publish } from "../pages/PublishPet/publishPet";
import { Edit } from "../pages/EditPet/editPet";
import { MisMascotas } from "../pages/MisMascotas/misMascotas";


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