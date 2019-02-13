import * as React from "react";
import JuniorContainer from "./JuniorContainer";
import Header from "../../Header/Header";
import LateralMenu from "../../LateralMenu/LateralMenu";

export default function JuniorPage(props) {
   

    return (
        <div className="main">
            <Header switchLateralMenu={props.switchLateralMenu} isCoach={props.isCoach} />
            <JuniorContainer />
            <LateralMenu slide={props.slide} />
        </div>
    );
}
