import * as React from "react";
import avatar from "../../../assets/img/avatar.jpg";
import Header from "../../Header/Header";
import LateralMenu from "../../LateralMenu/LateralMenu";

export default function JuniorDashboard(props) {
    return (
        <div>
            <Header switchLateralMenu={props.switchLateralMenu} isCoach={props.isCoach} />
            <LateralMenu slide={props.slide} />

            <div className="JuniorDashboard-container">
                <img className="profilePic" src={avatar} />

                <div className="profileInfo">
                    <p>
                        <b>{"Last Name : "} </b> {"Hogan"}
                    </p>
                    <p>
                        <b>{"First Name : "} </b> {"Hulk"}
                    </p>
                    <p className="email">{"hulk.hogan@test.com"}</p>
                    <button
                        className="modifyButton"
                        onClick={props.modifyProfile}>
                        {"modify"}
                    </button>

                    <form className="modifyProfile">
                        <div className="modifyInput">
                            <input type="text" placeholder="e-mail" />
                            <input type="password" placeholder="New password" />
                        </div>

                        <input
                            className="submitProfile"
                            type="submit"
                            value="submit"
                        />
                    </form>
                    <button
                        className="profileToggleBack"
                        onClick={props.ProfileToggleBack}>
                        {"back"}
                    </button>
                </div>
            </div>
        </div>
    );
}
