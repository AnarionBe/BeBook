import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header/Header";

export default function Main() {


    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}
