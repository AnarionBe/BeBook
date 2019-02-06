import * as React from "react";
import HeaderMenu from "./headerMenu";
import logo from "../assets/logo.png";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} />
                </div>
                <HeaderMenu />
            </header>
        );
    }
}
