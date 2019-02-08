import * as React from "react";
import HeaderMenu from "./headerMenu";
import SearchBar from "./searchBar";
import ProfileButton from "./profileButton";
import logo from "../assets/img/logo.png";

export default function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} />
            </div>
            <HeaderMenu />
            <SearchBar />
            <ProfileButton onClick={props.switchLateralMenu} />
        </header>
    );
}
