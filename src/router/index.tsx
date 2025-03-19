import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // ← Usá react-router-dom
import { Layout } from "@/components/layout";
import { Mascotas } from "@/pages/Mascotas";          // o "pages/Mascotas" si usás alias
import { Home } from "@/pages/Home";
import { Auth } from "@/pages/Auth";
import { Register } from "@/pages/Register";
import { Profile } from "@/pages/Profile/profile";
import { Publish } from "@/pages/PublishPet/publishPet";
import { Edit } from "@/pages/EditPet";
import { MisMascotas } from "@/pages/MisMascotas";


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