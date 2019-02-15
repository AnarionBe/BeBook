import * as React from "react";
import {Switch, BrowserRouter, Route} from "react-router-dom";
import Routes from "./Routes";

export default function Main() {


    return (
        <div>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </div>
    );
}
