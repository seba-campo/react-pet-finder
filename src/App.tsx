import * as React from "react"
import { Router } from "./router"
import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from 'recoil';

const root = document.querySelector(".root") as HTMLElement;

export function App(props: any){
    return (
            <RecoilRoot>
                <div>
                    <Router/>
                </div>
            </RecoilRoot>
    )
}

ReactDOM.createRoot(root).render(<App/>)