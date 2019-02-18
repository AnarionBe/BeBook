import * as React from "react";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import logo from "../../assets/img/logo.png";
import LateralMenu from "../LateralMenu/LateralMenu";

export default function Header(props) {

    const [slide, setSlide] = React.useState(false);

    const switchLateralMenu = () => {
        setSlide(!slide);
    };

    return (
        <header>
            <div className="logo">
                <img src={logo} />
            </div>
            <HeaderMenu  />
            <SearchBar />
            <ProfileButton onClick={switchLateralMenu} />
            <LateralMenu slide={slide} />
        </header>
    );
}
