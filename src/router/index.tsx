import  React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Loading } from "../components/fallback-loading";
import { Home } from "../pages/Home";
import { Mascotas } from "../pages/Mascotas"
import { Suspense } from "react";


export function Router(props: any){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/mascotas" element={<Mascotas />} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}