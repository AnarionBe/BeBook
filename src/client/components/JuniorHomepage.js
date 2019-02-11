import * as React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import LateralMenu from "./LateralMenu";

export default function JunioHomepage(props) {
   

    return (
        <div className="main">
            <Header switchLateralMenu={props.switchLateralMenu} />
            <Container />
            <LateralMenu slide={props.slide} />
        </div>
    );
}
