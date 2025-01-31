import * as React from "react"
import { Router } from "./router"
import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from 'recoil';

const root = document.querySelector(".root") as HTMLElement;

export function App(props: any){
    return (
        <React.Suspense fallback={<p>Loading</p>}>
            <RecoilRoot>
                <div>
                    <Router/>
                </div>
            </RecoilRoot>
        </React.Suspense>
    )
}

ReactDOM.createRoot(root).render(<App/>)