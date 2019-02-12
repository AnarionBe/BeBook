import * as React from "react";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import logo from "../assets/img/logo.png";

export default function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} />
            </div>
            <HeaderMenu isCoach={props.isCoach}/>
            <SearchBar />
            <ProfileButton onClick={props.switchLateralMenu} />
        </header>
    );
}
