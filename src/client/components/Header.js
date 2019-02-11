import * as React from "react";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import logo from "../assets/img/logo.png";

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={logo} />
                </div>
                <HeaderMenu />
                <SearchBar />
                <ProfileButton />
            </header>
        );
    }
}
