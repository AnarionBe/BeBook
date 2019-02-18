import * as React from "react";
import avatar from "../../../assets/img/avatar.jpg";

export default function JuniorDashboard() {
    const modifyProfile = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "block";
        document.getElementsByClassName("email")[0].style.display = "none";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "none";
    };

    const profileToggleBack = () => {
        document.getElementsByClassName("modifyProfile")[0].style.display =
            "none";
        document.getElementsByClassName("email")[0].style.display = "block";
        document.getElementsByClassName("modifyButton")[0].style.display =
            "block";
        document.getElementsByClassName("profileToggleBack")[0].style.display =
            "none";
    };

    return (
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
                <button className="modifyButton" onClick={modifyProfile}>
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
                    onClick={profileToggleBack}>
                    {"back"}
                </button>
            </div>
        </div>
    );
}
