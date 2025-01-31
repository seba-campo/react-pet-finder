import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import{ Index } from "../pages"
import { Search } from "../components/search"
import { SearchResult } from "../components/searchResult";
import { Item } from "../pages/item";
import { Results } from "../pages/resultados";
import { Layout } from "../components/layout";


export function Router(props: any){
    return (
      <BrowserRouter>
        <Routes>
            <Route path="" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="/search/:query" element={<Results/>} /> 
                <Route path="/item/:id" element={<Item/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    );
} 