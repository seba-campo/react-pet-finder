import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "../components/layout";
import { Home } from "../pages/home";


export function Router(props: any){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
      </BrowserRouter>
    );
}