import * as React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import LateralMenu from "./LateralMenu";

export default function JunioHomepage() {
    const [active, setActive] = React.useState(false);

    const switchLateralMenu = () => {
        setActive(!active);
    };

    return (
        <div className="main">
            <Header switchLateralMenu={switchLateralMenu} />
            <Container />
            <LateralMenu slide={active} />
        </div>
    );
}
