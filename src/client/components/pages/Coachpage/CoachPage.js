import * as React from "react";
import Header from "../../Header/Header";
import CoachContainer from "./CoachContainer";
import LateralMenu from "../../LateralMenu/LateralMenu";

export default function CoachPage(props) {

    return (
        <div>
            <Header isCoach={props.isCoach} switchLateralMenu={props.switchLateralMenu} />
            <CoachContainer />
            <LateralMenu slide={props.slide} />
        </div>
    );
}
