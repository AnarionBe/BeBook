import React from "react";
import image from "../assets/img/404.png";
import "../sass/_notfound.css";
import {Redirect} from "react-router-dom";

export default () => {
    const [redirect, setRedirect] = React.useState(false);
    const goHome = () => {
        setRedirect(true);
    };

    return (
        <div className="container404">
            {redirect && <Redirect to="/" />}
            <div className="contentContainer">
                <img src={image} />
                <button onClick={goHome}>{"Go back home"}</button>
            </div>
        </div>
    );
};
