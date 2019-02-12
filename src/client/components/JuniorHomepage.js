import * as React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import LateralMenu from "../components/LateralMenu";

export default function JuniorHomepage(props) {
   

    return (
        <div className="main">
            <Header switchLateralMenu={props.switchLateralMenu} isCoach={props.isCoach} />
            <Container />
            <LateralMenu slide={props.slide} />
        </div>
    );
}
