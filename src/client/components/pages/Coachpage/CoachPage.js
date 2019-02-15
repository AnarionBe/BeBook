import * as React from "react";
import Header from "../../Header/Header";
import CoachContainer from "./CoachContainer";
import LateralMenu from "../../LateralMenu/LateralMenu";
import lifecycle from "react-pure-lifecycle";
// import {getUsers} from "../../auth";

const methods = {
    componentWillMount(props) {
        // getUsers();
        return props;
    },
};

export default lifecycle(methods)(props => {
    return (
        <div>
            <Header
                isCoach={props.isCoach}
                switchLateralMenu={props.switchLateralMenu}
            />
            <CoachContainer />
            <LateralMenu slide={props.slide} />
        </div>
    );
});
