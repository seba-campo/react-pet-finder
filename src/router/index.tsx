import  React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Loading } from "../components/fallback-loading";
import { Home } from "../pages/Home";
import { Mascotas } from "../pages/Mascotas"
import { Auth } from "../pages/Auth";


export function Router(props: any){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/mascotas" element={<Mascotas />} />
                  <Route path="/login" element={<Auth />}/>
            </Route>
        </Routes>
      </BrowserRouter>
    );
}