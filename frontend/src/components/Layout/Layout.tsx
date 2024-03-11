import {ReactNode} from "react";
import Header from "../Header.tsx";
import "./Layout.css";
import Navigation from "../Navigation/Navigation.tsx";
type LayoutProps = {
    children: ReactNode

}
export default function Layout(props: Readonly<LayoutProps>) {
    return(
        <>
            <Header/>
            <Navigation/>
            <div className="container">
            <main>
                {props.children}
            </main>

            </div>

        </>
    )
}