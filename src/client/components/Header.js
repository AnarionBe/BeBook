import * as React from "react";
import logo from "../assets/img/logo.png";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} />
                </div>
            </header>
        );
    }
}
