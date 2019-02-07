import * as React from "react";
import avatar from "../assets/avatar.jpg";

export default class ProfileButton extends React.Component {
    render() {
        return <img className="avatar" src={avatar} />;
    }
}
