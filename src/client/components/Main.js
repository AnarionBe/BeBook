import * as React from "react";
import JuniorHomepage from "../components/JuniorHomepage";
import Login from "./login";

import "@fortawesome/fontawesome-free";

export default () => {
    return (
        <div className="main">
            <JuniorHomepage />
            <Login />
        </div>
    );
};
