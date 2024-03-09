import {ReactNode} from "react";
import Header from "../Header.tsx";
import "./Layout.css";
type LayoutProps = {
    children: ReactNode

}
export default function Layout(props: Readonly<LayoutProps>) {
    return(
        <>
            <Header/>
            <body>
            <div className="container">
            <main>
                {props.children}
            </main>
            </div>
            </body>
        </>
    )
}