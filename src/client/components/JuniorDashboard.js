import * as React from "react";
import avatar from "../assets/avatar.jpg";

export default class JuniorDashboard extends React.Component {
    render() {
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
                    <button
                        className="modifyButton"
                        onClick={this.props.modifyProfile}>
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
                        onClick={this.props.ProfileToggleBack}>
                        {"back"}
                    </button>
                </div>
            </div>
        );
    }
}
