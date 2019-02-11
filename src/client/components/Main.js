import * as React from "react";
import JuniorHomepage from "./JuniorHomepage";
import Login from "./login";
import CoachPage from "./CoachPage";

import "@fortawesome/fontawesome-free";

export default function Main() {
    const isLogged = true;
    const isCoach = true;

    const [active, setActive] = React.useState(false);

    const switchLateralMenu = () => {
        setActive(!active);
    };

    return (
        <div className="main">
            {isLogged && isCoach ? (
                <CoachPage switchLateralMenu={switchLateralMenu} slide={active} isCoach={isCoach}/>
            ) : isLogged ? (
                <JuniorHomepage switchLateralMenu={switchLateralMenu} slide={active}/>
            ) : (
                <Login />
            )}
        </div>
    );
}
