import * as React from "react";
import Header from "../components/Header";
import CoachContainer from "../components/CoachContainer";
import LateralMenu from "../components/LateralMenu";

export default function CoachPage(props) {

    return (
        <div>
            <Header isCoach={props.isCoach} switchLateralMenu={props.switchLateralMenu} />
            <CoachContainer />
            <LateralMenu slide={props.slide} />
        </div>
    );
}
