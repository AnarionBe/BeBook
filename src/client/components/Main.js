import * as React from "react";
import Login from "./pages/Login/Login";
import {loggedIn} from "./auth";

import "@fortawesome/fontawesome-free";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";
import Header from "./Header/Header";

export default function Main() {
    if (!loggedIn()) {
        return (
            <div>
                <Login />
            </div>
        );
    }
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}
